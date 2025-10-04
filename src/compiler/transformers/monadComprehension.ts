import {
    Bundle,
    forEachChild,
    isElementAccessExpression,
    isSourceFile,
    isStringLiteral,
    Node,
    NodeArray,
    NodeFactory,
    NodeFlags,
    NodesVisitor,
    NodeVisitor,
    setTextRange,
    SourceFile,
    SyntaxKind,
    TransformationContext,
    Transformer,
    TransformerFactory,
    visitEachChild,
    visitNode,
    visitNodes,
    Visitor,
} from '../_namespaces/ts.js';

const noAssertNodesVisitor: NodesVisitor = <
    TIn extends Node,
    TInArray extends NodeArray<TIn> | undefined,
>(
    nodes: TInArray,
    visitor: Visitor<TIn, Node | undefined>,
    test?: (node: Node) => boolean,
    start?: number,
    count?: number,
): NodeArray<Node> | (TInArray & undefined) => {
    return visitNodes(nodes, visitor, /*test*/ undefined, start, count);
};

const noAssertNodeVisitor: NodeVisitor = (
    node: Node,
    visitor: (node: Node) => Node,
    test: any,
    lift: any,
) => {
    return visitNode(
        node,
        visitor,
        test !== undefined ? () => true : undefined,
        lift,
    );
};

const visitAllDescendants = (
    node: SourceFile,
    visitor: (node: Node) => Node,
    context: TransformationContext,
): SourceFile => {
    type E = Readonly<{
        state: 'enter' | 'exit';
        node: Node;
        parent?: Node;
    }>;
    const stack: E[] = [
        {
            state: 'enter',
            node,
            parent: undefined,
        },
    ];

    const updatedNodes = new Map<Node, Node>();

    while (stack.length > 0) {
        const e = stack.pop()!;
        if (e.state === 'enter') {
            switch (e.node.kind) {
                case SyntaxKind.InterfaceDeclaration:
                case SyntaxKind.TypeLiteral:
                case SyntaxKind.IndexSignature:
                case SyntaxKind.JSDoc:
                case SyntaxKind.JSDocAllType:
                case SyntaxKind.JSDocUnknownType:
                case SyntaxKind.JSDocNullableType:
                case SyntaxKind.JSDocNonNullableType:
                case SyntaxKind.JSDocOptionalType:
                case SyntaxKind.JSDocVariadicType:
                case SyntaxKind.JSDocNamepathType:
                case SyntaxKind.JSDocAugmentsTag:
                case SyntaxKind.JSDocClassTag:
                case SyntaxKind.JSDocEnumTag:
                case SyntaxKind.JSDocParameterTag:
                case SyntaxKind.JSDocReturnTag:
                case SyntaxKind.JSDocThisTag:
                case SyntaxKind.JSDocTypeTag:
                case SyntaxKind.JSDocTemplateTag:
                case SyntaxKind.JSDocTypedefTag:
                case SyntaxKind.JSDocCallbackTag:
                case SyntaxKind.JSDocSignature:
                case SyntaxKind.JSDocLink:
                case SyntaxKind.JSDocLinkCode:
                case SyntaxKind.JSDocAuthorTag:
                case SyntaxKind.JSDocCommentTextToken:
                case SyntaxKind.JSDocDeprecatedTag:
                case SyntaxKind.JSDocFunctionType:
                case SyntaxKind.JSDocImplementsTag:
                case SyntaxKind.JSDocImportTag:
                case SyntaxKind.JSDocLinkPlain:
                case SyntaxKind.JSDocMemberName:
                case SyntaxKind.JSDocNameReference:
                case SyntaxKind.JSDocOverloadTag:
                case SyntaxKind.JSDocOverrideTag:
                case SyntaxKind.JSDocPrivateTag:
                case SyntaxKind.JSDocPropertyTag:
                case SyntaxKind.JSDocProtectedTag:
                case SyntaxKind.JSDocPublicTag:
                case SyntaxKind.JSDocReadonlyTag:
                case SyntaxKind.JSDocSatisfiesTag:
                case SyntaxKind.JSDocSeeTag:
                case SyntaxKind.JSDocTag:
                case SyntaxKind.JSDocText:
                case SyntaxKind.JSDocThrowsTag:
                case SyntaxKind.JSDocTypeExpression:
                case SyntaxKind.JSDocTypeLiteral:
                case SyntaxKind.Decorator:
                    break;
                default: {
                    stack.push({
                        state: 'exit',
                        node: e.node,
                        parent: e.parent,
                        // hasChildren: hasChildren(e.node),
                    });
                    forEachChild(e.node, (child) => {
                        stack.push({
                            state: 'enter',
                            node: child,
                            parent: e.node,
                        });
                    });
                }
            }
            continue;
        }

        const visitedNode = visitor(e.node);
        const updatedNode = visitEachChild(
            visitedNode,
            (child) => updatedNodes.get(child) ?? child,
            context,
            /*nodesVisitor*/ noAssertNodesVisitor,
            /*tokenVisitor*/ undefined,
            /*nodeVisitor*/ noAssertNodeVisitor,
        );
        updatedNodes.set(e.node, updatedNode);
    }
    return (updatedNodes.get(node) as SourceFile) ?? node;
};

const visitFlatMapId =
    (f: NodeFactory) =>
    (node: Node): Node => {
        if (
            isStringLiteral(node) &&
            node.flags & NodeFlags.Synthesized &&
            node.parent &&
            isElementAccessExpression(node.parent) &&
            node.text === 'flatMap'
        ) {
            return setTextRange(f.createStringLiteral('flatMap'), node);
        }
        return node;
    };

export const transformMonadComprehension: TransformerFactory<
    SourceFile | Bundle
> = (context): Transformer<SourceFile | Bundle> => {
    const f = context.factory;

    return (sf: SourceFile | Bundle): SourceFile | Bundle =>
        isSourceFile(sf)
            ? visitAllDescendants(sf, visitFlatMapId(f), context)
            : sf;
};
Info seq  [hh:mm:ss:mss] currentDirectory:: /home/src/Vscode/Projects/bin useCaseSensitiveFileNames:: false
Info seq  [hh:mm:ss:mss] libs Location:: /home/src/tslibs/TS/Lib
Info seq  [hh:mm:ss:mss] globalTypingsCacheLocation:: /home/src/Library/Caches/typescript
Info seq  [hh:mm:ss:mss] Provided types map file "/home/src/tslibs/TS/Lib/typesMap.json" doesn't exist
//// [/home/src/tslibs/TS/Lib/lib.d.ts]
lib.d.ts-Text

//// [/home/src/tslibs/TS/Lib/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/user/username/projects/monad/src/main.ts]
const main = () => {
  {
    const a = true;
    switch (a) {
      case true => JSON.stringify(a);
      case _ => JSON.stringify(a);
    };
  }

  {
    const a = 'foo';
    switch (a) {
      case 'foo' => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }

  {
    const a = 42;
    switch (a) {
      case 42 => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }

  {
    const a = null;
    switch (a) {
      case null => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }

  {
    const a = undefined;
    switch (a) {
      case undefined => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }

  {
    const a = [1, 2, 3];
    switch (a) {
      case [1, 2, 3] => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }

  {
    const a = { x: 10, y: 20 };
    switch (a) {
      case { x: 10, y: 20 } => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }

  {
    const a = { x: 10, y: 20 };
    const r = switch (a) {
      case { x: 10, y: 20 } => JSON.stringify(a);
      case _ => JSON.stringify(_);
    };
  }
};

main();


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/username/projects/monad/src/main.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Creating InferredProject: /dev/null/inferredProject1*, currentDirectory: /user/username/projects/monad/src
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/monad/src/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/monad/src/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/monad/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/monad/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/monad/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/monad/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/monad/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/monad/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 lib.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/user/username/projects/monad/src/main.ts SVC-1-0 "const main = () => {\n  {\n    const a = true;\n    switch (a) {\n      case true => JSON.stringify(a);\n      case _ => JSON.stringify(a);\n    };\n  }\n\n  {\n    const a = 'foo';\n    switch (a) {\n      case 'foo' => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n\n  {\n    const a = 42;\n    switch (a) {\n      case 42 => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n\n  {\n    const a = null;\n    switch (a) {\n      case null => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n\n  {\n    const a = undefined;\n    switch (a) {\n      case undefined => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n\n  {\n    const a = [1, 2, 3];\n    switch (a) {\n      case [1, 2, 3] => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n\n  {\n    const a = { x: 10, y: 20 };\n    switch (a) {\n      case { x: 10, y: 20 } => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n\n  {\n    const a = { x: 10, y: 20 };\n    const r = switch (a) {\n      case { x: 10, y: 20 } => JSON.stringify(a);\n      case _ => JSON.stringify(_);\n    };\n  }\n};\n\nmain();"


	../../../../../home/src/tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	../../../../../home/src/tslibs/TS/Lib/lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../../../home/src/tslibs/TS/Lib/lib.d.ts'
	../../../../../home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../../../home/src/tslibs/TS/Lib/lib.d.ts'
	main.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/monad/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/user/username/projects/monad/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/monad/src/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/monad/src/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/monad/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/user/username/projects/monad/node_modules/@types: *new*
  {}
/user/username/projects/monad/src/node_modules/@types: *new*
  {}
/user/username/projects/node_modules/@types: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/user/username/projects/monad/src/main.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 5,
        "offset": 25
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 1,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 5,
            "offset": 25
          },
          "end": {
            "line": 5,
            "offset": 34
          }
        }
      }
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    documentPositionMappers: 1 *changed*
        /home/src/tslibs/ts/lib/lib.d.ts: identitySourceMapConsumer *new*
    autoImportProviderHost: false

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts *changed*
    version: Text-1
    sourceMapFilePath: false *changed*
    containingProjects: 1
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/user/username/projects/monad/src/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 5,
        "offset": 34
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 2,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 5,
            "offset": 25
          },
          "end": {
            "line": 5,
            "offset": 34
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 6,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 3,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 6,
            "offset": 22
          },
          "end": {
            "line": 6,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 6,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 4,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 6,
            "offset": 22
          },
          "end": {
            "line": 6,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 13,
        "offset": 26
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 5,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 13,
            "offset": 26
          },
          "end": {
            "line": 13,
            "offset": 35
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 13,
        "offset": 35
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 6,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 13,
            "offset": 26
          },
          "end": {
            "line": 13,
            "offset": 35
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 14,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 7,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 14,
            "offset": 22
          },
          "end": {
            "line": 14,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 14,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 8,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 14,
            "offset": 22
          },
          "end": {
            "line": 14,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 9,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 21,
        "offset": 23
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 9,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 21,
            "offset": 23
          },
          "end": {
            "line": 21,
            "offset": 32
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 10,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 21,
        "offset": 32
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 10,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 21,
            "offset": 23
          },
          "end": {
            "line": 21,
            "offset": 32
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 11,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 22,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 11,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 22,
            "offset": 22
          },
          "end": {
            "line": 22,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 12,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 22,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 12,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 22,
            "offset": 22
          },
          "end": {
            "line": 22,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 13,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 29,
        "offset": 25
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 13,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 29,
            "offset": 25
          },
          "end": {
            "line": 29,
            "offset": 34
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 14,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 29,
        "offset": 34
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 14,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 29,
            "offset": 25
          },
          "end": {
            "line": 29,
            "offset": 34
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 15,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 30,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 15,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 30,
            "offset": 22
          },
          "end": {
            "line": 30,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 16,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 30,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 16,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 30,
            "offset": 22
          },
          "end": {
            "line": 30,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 17,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 37,
        "offset": 30
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 17,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 37,
            "offset": 30
          },
          "end": {
            "line": 37,
            "offset": 39
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 18,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 37,
        "offset": 39
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 18,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 37,
            "offset": 30
          },
          "end": {
            "line": 37,
            "offset": 39
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 19,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 38,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 19,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 38,
            "offset": 22
          },
          "end": {
            "line": 38,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 20,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 38,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 20,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 38,
            "offset": 22
          },
          "end": {
            "line": 38,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 21,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 45,
        "offset": 30
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 21,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 45,
            "offset": 30
          },
          "end": {
            "line": 45,
            "offset": 39
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 22,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 45,
        "offset": 39
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 22,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 45,
            "offset": 30
          },
          "end": {
            "line": 45,
            "offset": 39
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 23,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 46,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 23,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 46,
            "offset": 22
          },
          "end": {
            "line": 46,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 24,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 46,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 24,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 46,
            "offset": 22
          },
          "end": {
            "line": 46,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 25,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 53,
        "offset": 37
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 25,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 53,
            "offset": 37
          },
          "end": {
            "line": 53,
            "offset": 46
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 26,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 53,
        "offset": 46
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 26,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 53,
            "offset": 37
          },
          "end": {
            "line": 53,
            "offset": 46
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 27,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 54,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 27,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 54,
            "offset": 22
          },
          "end": {
            "line": 54,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 28,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 54,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 28,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 54,
            "offset": 22
          },
          "end": {
            "line": 54,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 29,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 61,
        "offset": 37
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 29,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 61,
            "offset": 37
          },
          "end": {
            "line": 61,
            "offset": 46
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 30,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 61,
        "offset": 46
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 30,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 61,
            "offset": 37
          },
          "end": {
            "line": 61,
            "offset": 46
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 31,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 62,
        "offset": 22
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 31,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 62,
            "offset": 22
          },
          "end": {
            "line": 62,
            "offset": 31
          }
        }
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 32,
      "type": "request",
      "arguments": {
        "file": "/user/username/projects/monad/src/main.ts",
        "line": 62,
        "offset": 31
      },
      "command": "definitionAndBoundSpan"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "definitionAndBoundSpan",
      "request_seq": 32,
      "success": true,
      "body": {
        "definitions": [
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 1169,
              "offset": 5
            },
            "end": {
              "line": 1169,
              "offset": 14
            },
            "contextStart": {
              "line": 1169,
              "offset": 5
            },
            "contextEnd": {
              "line": 1169,
              "offset": 116
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 62,
            "offset": 22
          },
          "end": {
            "line": 62,
            "offset": 31
          }
        }
      }
    }
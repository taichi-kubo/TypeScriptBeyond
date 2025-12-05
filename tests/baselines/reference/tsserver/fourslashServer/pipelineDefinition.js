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
  (new Date()) |> (_ => _.getTime()) |> JSON.stringify);
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
	/user/username/projects/monad/src/main.ts SVC-1-0 "const main = () => {\n  (new Date()) |> (_ => _.getTime()) |> JSON.stringify);\n};\n\nmain();"


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
        "line": 2,
        "offset": 8
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
              "line": 770,
              "offset": 11
            },
            "end": {
              "line": 770,
              "offset": 15
            },
            "contextStart": {
              "line": 770,
              "offset": 1
            },
            "contextEnd": {
              "line": 921,
              "offset": 2
            }
          },
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 959,
              "offset": 13
            },
            "end": {
              "line": 959,
              "offset": 17
            },
            "contextStart": {
              "line": 959,
              "offset": 1
            },
            "contextEnd": {
              "line": 959,
              "offset": 35
            }
          },
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 4579,
              "offset": 11
            },
            "end": {
              "line": 4579,
              "offset": 15
            },
            "contextStart": {
              "line": 4579,
              "offset": 1
            },
            "contextEnd": {
              "line": 4599,
              "offset": 2
            }
          },
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 924,
              "offset": 5
            },
            "end": {
              "line": 924,
              "offset": 18
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 2,
            "offset": 8
          },
          "end": {
            "line": 2,
            "offset": 12
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
        "line": 2,
        "offset": 12
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
              "line": 770,
              "offset": 11
            },
            "end": {
              "line": 770,
              "offset": 15
            },
            "contextStart": {
              "line": 770,
              "offset": 1
            },
            "contextEnd": {
              "line": 921,
              "offset": 2
            }
          },
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 959,
              "offset": 13
            },
            "end": {
              "line": 959,
              "offset": 17
            },
            "contextStart": {
              "line": 959,
              "offset": 1
            },
            "contextEnd": {
              "line": 959,
              "offset": 35
            }
          },
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 4579,
              "offset": 11
            },
            "end": {
              "line": 4579,
              "offset": 15
            },
            "contextStart": {
              "line": 4579,
              "offset": 1
            },
            "contextEnd": {
              "line": 4599,
              "offset": 2
            }
          },
          {
            "file": "/home/src/tslibs/TS/Lib/lib.d.ts",
            "start": {
              "line": 924,
              "offset": 5
            },
            "end": {
              "line": 924,
              "offset": 18
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 2,
            "offset": 8
          },
          "end": {
            "line": 2,
            "offset": 12
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
        "line": 2,
        "offset": 27
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
              "line": 786,
              "offset": 5
            },
            "end": {
              "line": 786,
              "offset": 12
            },
            "contextStart": {
              "line": 786,
              "offset": 5
            },
            "contextEnd": {
              "line": 786,
              "offset": 23
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 2,
            "offset": 27
          },
          "end": {
            "line": 2,
            "offset": 34
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
        "line": 2,
        "offset": 34
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
              "line": 786,
              "offset": 5
            },
            "end": {
              "line": 786,
              "offset": 12
            },
            "contextStart": {
              "line": 786,
              "offset": 5
            },
            "contextEnd": {
              "line": 786,
              "offset": 23
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 2,
            "offset": 27
          },
          "end": {
            "line": 2,
            "offset": 34
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
        "line": 2,
        "offset": 46
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
            "line": 2,
            "offset": 46
          },
          "end": {
            "line": 2,
            "offset": 55
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
        "line": 2,
        "offset": 55
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
            "line": 2,
            "offset": 46
          },
          "end": {
            "line": 2,
            "offset": 55
          }
        }
      }
    }
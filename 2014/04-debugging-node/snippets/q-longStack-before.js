var Q = require("q")


function a() { Q.delay(100).done(b) }
function b() { throw new Error("foo") }

a()

// Error: foo
//     at b (/path/to/snippets/q-longStack-before.js:5:22)
//     at _fulfilled (/path/to/snippets/node_modules/q/q.js:787:54)
//     at self.promiseDispatch.done (/path/to/snippets/node_modules/q/q.js:816:30)
//     at Promise.promise.promiseDispatch (/path/to/snippets/node_modules/q/q.js:749:13)
//     at /path/to
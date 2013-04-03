Simple UID
==========
Generate probabilistically unique strings

Uses data from Crypto.randomBytes(), process.pid as a UInt32BE (4 Bytes), and
Date.now() as a DoubleBE (8 Bytes) to construct 24-bytes of chaos:

    |0       7|8      15|16    23|
    |----|----|----|----|--------|
    | Date    |PID | Random      |

The output is Base64 encoded by default. Passing the `url` flag will cause the
output to be URL-Safe Base64 encoded ( `+` becomes `-` and `/` becomes `_`):

    var UID = require('simple-uid')
    console.log("Base64: " + UID.generate())
    console.log("URL-Safe: " + UID.generate(true))

### Tests
Run 'em with mocha:

    mocha -R spec test/00-default.js 

### License
Copyright (c) 2013 John Manero, Dynamic Network Services Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

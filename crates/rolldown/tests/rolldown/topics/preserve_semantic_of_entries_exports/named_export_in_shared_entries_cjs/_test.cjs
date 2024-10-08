const assert = require('node:assert');
const entry = require('./dist/entry.js');
const entry2 = require('./dist/entry2.js');

assert.deepStrictEqual(entry.foo, 'foo');
assert.deepStrictEqual(entry.foo, entry2.foo);
assert.deepStrictEqual(entry.default, 'main');
assert.deepStrictEqual(entry.default, entry2.default);

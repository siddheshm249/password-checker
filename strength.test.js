const test = require('node:test');
const assert = require('node:assert');
const S = require('./strength.js');

test('common password scores 0', () => assert.strictEqual(S.score('Password'), 0));
test('short lowercase is weak', () => assert.strictEqual(S.label(S.score('abc')), 'Weak'));
test('length 8 adds a point', () => assert.strictEqual(S.score('abcdefgh'), 1));
test('mixed case adds a point', () => assert.strictEqual(S.score('abcdEFGH'), 2));
test('digits add a point', () => assert.strictEqual(S.score('abcdEF12'), 3));
test('strong password', () => assert.strictEqual(S.label(S.score('Cloud#Devops2026!')), 'Strong'));
test('non-string throws', () => assert.throws(() => S.score(123)));
test('labels map correctly', () => {
  assert.strictEqual(S.label(2), 'Fair');
  assert.strictEqual(S.label(3), 'Good');
});

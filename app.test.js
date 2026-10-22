const test = require('node:test');
const assert = require('node:assert/strict');

test('application message is correct', () => {
    const message = 'Hello from DevOps Internship!';

    assert.equal(
        message,
        'Hello from DevOps Internship!'
    );
});
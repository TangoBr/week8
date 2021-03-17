const foo = require(`../hw_3/foo.js`);

test(`testFoo`, () => {
    expect(foo()).toBe(`bar`)
});
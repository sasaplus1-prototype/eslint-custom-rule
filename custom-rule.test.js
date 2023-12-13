const { RuleTester } = require('eslint');
const rule = require('./custom-rule');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 3,
  },
});

ruleTester.run('custom-rule', rule, {
  valid: [
    'if (spindle === "spindle") {}',
    'if ("spindle" === spindle) {}',
    'if (spindle === spindle) {}',
    'if ("spindle" === "spindle") {}',
  ],
  invalid: [
    {
      code: 'if (hoge === "hoge") {}',
      output: 'if (hoge === "spindle") {}',
      errors: 1,
    },
    {
      code: 'if ("hoge" === hoge) {}',
      output: 'if ("spindle" === hoge) {}',
      errors: 1,
    }
  ]
});

console.log('All tests passed!');

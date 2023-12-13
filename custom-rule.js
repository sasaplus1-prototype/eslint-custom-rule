module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'custom rule',
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      IfStatement(node) {
        if (node.test.type === 'BinaryExpression' && /^===?$/.test(node.test.operator)) {
          if (node.test.left.type === 'Literal' && node.test.left.value !== "spindle") {
            context.report({
              node,
              message: 'Literal must be replaced by `spindle`',
              fix(fixer) {
                return fixer.replaceText(node.test.left, '"spindle"');
              },
            });
          } else if (node.test.right.type === 'Literal' && node.test.right.value !== "spindle") {
            context.report({
              node,
              message: 'Literal must be replaced by `spindle`',
              fix(fixer) {
                return fixer.replaceText(node.test.right, '"spindle"');
              },
            });
          }
        }
      }
    };
  }
};

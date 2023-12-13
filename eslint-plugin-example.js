const customRule = require('./custom-rule');
const plugin = {
  rules: {
    "custom-rule": customRule
  }
};
module.exports = plugin;

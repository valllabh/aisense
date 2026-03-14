const aisense = require("./aisense.json");

module.exports = function () {
  const children = [];
  for (const statement of aisense.statements) {
    if (statement.children) {
      for (const child of statement.children) {
        children.push({
          ...child,
          parentId: statement.id,
          parentStatement: statement.statement,
        });
      }
    }
  }
  return children;
};

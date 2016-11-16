
module.exports.rules = {
  "no-template-url": context => ({
    Property(node) {

      if (node.key.type === "Identifier" && node.key.name === "templateUrl") {
        context.report(node, 'templateUrl usage is forbidden');
      }
    }
  })
};

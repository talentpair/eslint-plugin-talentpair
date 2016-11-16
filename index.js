
module.exports.rules = {
  "no-template-url": context => ({
    VariableDeclarator: (node) => {
      return;
      
      console.log(node);
      if (node.name.length < 2) {
        context.report(node, 'Variable names should be longer than 1 character');
      }
    }
    // , more interception points (see https://github.com/estree/estree)
  })
  // more rules
};
var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Hello = artifacts.require("./Hello.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Hello);
};

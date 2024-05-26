const AccessControlContract = artifacts.require("AccessControlContract");

module.exports = function(deployer) {
  deployer.deploy(AccessControlContract);
};

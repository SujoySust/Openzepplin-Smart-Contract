const AccessControlIERC20 = artifacts.require("AccessControlIERC20");

module.exports = function(deployer) {
  deployer.deploy(AccessControlIERC20);
};

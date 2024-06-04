const MyToken = artifacts.require("MyToken");
const { BN, expectRevert } = require('@openzeppelin/test-helpers');

module.exports = function(deployer) {
  const tokenName = "MyToken";
  const tokenSymbol = "MTK";
  const initialSupply = new BN(web3.utils.toWei('1000'));
  deployer.deploy(MyToken, tokenName, tokenSymbol, initialSupply);
};

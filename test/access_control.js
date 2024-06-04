// const AccessControlIERC20 = artifacts.require("AccessControlIERC20");
// const { expect } = require("chai");
// const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

// contract("AccessControlIERC20", (accounts) => {
//   const [owner, addr1, addr2] = accounts;

//   beforeEach(async () => {
//     this.token = await AccessControlIERC20.new({ from: owner });
//   });

//   describe("Deployment", () => {
//     it("assings the default admin role to the deployer", async () => {
//       const isAdmin = await this.token.hasRole(
//         this.token.DEFAULT_ADMIN_ROLE(),
//         owner
//       );
//       expect(isAdmin).to.be.true;
//     });
//   });

//   describe("Minting", () => {
//     it("allows minting by an account with MINTER_ROLE", async () => {
//       await this.token.grantRole(this.token.MINTER_ROLE(), addr1, {
//         from: owner,
//       });
//       await this.token.mint(addr2, 10, { from: addr1 });
//       const balance = await this.token.balanceOf(addr2);
//       expect(balance).to.be.bignumber.equal(new BN(10));
//     });

//     it("reverts when minting by an account without MINTER_ROLE", async () => {
//       await expectRevert(
//         this.token.mint(addr2, 10, { from: addr1 }),
//         `AccessControl: account ${addr1.toLowerCase()} is missing role ${await this.token.MINTER_ROLE()}`
//       );
//     });
//   });

//   describe("Burning", function () {
//     beforeEach(async () => {
//       await this.token.grantRole(this.token.MINTER_ROLE(), owner);
//       await this.token.mint(addr1, 100, { from: owner });
//     });

//     it("allows burning by an account with BURNER_ROLE", async () => {
//       await this.token.grantRole(this.token.BURNER_ROLE(), addr1, {
//         from: owner,
//       });
//       await this.token.burn(addr1, 50, { from: addr1 });

//       const balance = await this.token.balanceOf(addr1);
//       expect(balance).to.be.bignumber.equal(new BN(50));
//     });

//     it("reverts when burning by an account without BURNER_ROLE", async () => {
//       await expectRevert(
//         this.token.burn(addr1, 50, { from: addr1 }),
//         `AccessControl: account ${addr1.toLowerCase()} is missing role ${await this.token.BURNER_ROLE()}`
//       );
//     });
//   });
// });

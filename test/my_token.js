const MyToken = artifacts.require("MyToken");
const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

contract("MyToken", (accounts) => {
    const [deployer, user1, user2] = accounts;

    const name = "MyToken";
    const symbol = "MTK";
    const decimals = new BN(18);
    const initialSupply = new BN(web3.utils.toWei('1000')); // 1000 tokens

    let token;

    beforeEach(async () => {
        token = await MyToken.new(name, symbol, initialSupply);
    });

    describe('Initialization', () => {
        it('should have correct name', async () => {
            expect(await token.name()).to.equal(name);
        });

        it('should have correct symbol', async ()=> {
            expect(await token.symbol()).to.equal(symbol);
        });

        it('should have correct decimal', async() => {
            expect(await token.decimals()).to.be.bignumber.equal(decimals);
        });

        it('should have correct initial supply', async() => {
            expect(await token.totalSupply()).to.be.bignumber.equal(initialSupply);
        });

        it('should assign the initial supply to the deployer', async () => {
            expect(await token.balanceOf(deployer)).to.be.bignumber.equal(initialSupply);
        });
    });

    describe('Approve', () => {
        it('should approve token successfully', async () => {
            const amount = new BN(web3.utils.toWei('10'));
            await token.approve(user1, amount, {from: deployer});
            expect(await token.allowance(deployer, user1)).to.be.bignumber.equal(amount);
        });

        it('should update the approval amount', async() => {
            const initialAmount = new BN(web3.utils.toWei('10'));
            const updatedAmount = new BN(web3.utils.toWei('20'));

            await token.approve(user1, initialAmount, {from: deployer});
            expect(await token.allowance(deployer, user1)).to.be.bignumber.equal(initialAmount);

            await token.approve(user1, updatedAmount, { from: deployer });
            expect(await token.allowance(deployer, user1)).to.be.bignumber.equal(updatedAmount);
        });

        it('should approve zero tokens', async () => {
            const amount = new BN(0);
            await token.approve(user1, amount, {from: deployer});
            expect(await token.allowance(deployer, user1)).to.be.bignumber.equal(amount);
        });

        it("should emit an Approval event", async () => {
            const amount = new BN(web3.utils.toWei('100'));
            const receipt = await token.approve(user1, amount, { from: deployer });
            
            expect(receipt.logs.length).to.equal(1);
            const event = receipt.logs[0];
            expect(event.event).to.equal('Approval');
            expect(event.args.owner).to.equal(deployer);
            expect(event.args.spender).to.equal(user1);
            expect(event.args.value).to.be.bignumber.equal(amount);
        });
    });
})
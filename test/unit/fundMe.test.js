const { assert } = require("chai")
const { deployments, ethers, getNamedAccounts } = require("hardhat")
describe("FundMe", async () => {
    let fundMe
    let deployer
    let MockV3Aggregator
    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe", deployer)
        MockV3Aggregator = await ethers.getContract(
            "MockV3Aggregator",
            deployer
        )
    })

    describe("constructor", async function () {
        it("It set the aggregator addresses correctly", async function () {
            const response = await fundMe.getPriceFeed()
            assert.equal(response, MockV3Aggregator.address)
        })
    })
})

const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("SumDemo5", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deploySumDemo5Fixture() {
      const [owner, otherAccount] = await ethers.getSigners();
  
      const SumDemo5 = await ethers.getContractFactory("SumDemo5");
      const sumdem = await SumDemo5.deploy();
  
      return { sumdem, owner, otherAccount };
    }
  
    describe("Add", function () {
      it("Should return correct result", async function () {
        const { sumdem } = await loadFixture(deploySumDemo5Fixture);

        numbers = [2,3,7]
        let res = await sumdem.sum(numbers)
        console.log(res)

        // expect().to.equal();
      });
  
    });
  

  });
  
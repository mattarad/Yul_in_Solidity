const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("LookupDemo1", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployLookupDemo1Fixture() {
      const [owner, otherAccount] = await ethers.getSigners();
  
      const LookupDemo1 = await ethers.getContractFactory("LookupDemo1");
      const lookup = await LookupDemo1.deploy();
      const NUMBERS = [
            "114876219837621409852413",
            "219837621983761286387126",
            "325143876215381275638172",
            "412139367868763871954915",
            "529817320195632014987113"
        ]
  
      return { lookup, NUMBERS, owner, otherAccount };
    }
  
    describe("contract", function () {
      it("Should return correct results", async function () {
        const { lookup, NUMBERS } = await loadFixture(deployLookupDemo1Fixture);
        let res = []
        for(let i = 0; i < NUMBERS.length; i++) {
            let num = await lookup.lookup(i)
            res.push(num)
        }
        res.forEach((num, index) => {
            expect(num.toString()).to.eq(NUMBERS[index])
        })
      });
    });
  });
  
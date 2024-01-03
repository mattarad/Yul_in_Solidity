const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("MaskingDemo3", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployMaskingDemo3Fixture() {
      const [owner, otherAccount] = await ethers.getSigners();
  
      const MaskingDemo3 = await ethers.getContractFactory("MaskingDemo3");
      const maskingD = await MaskingDemo3.deploy();
  
      return { maskingD, owner, otherAccount };
    }
  
    describe("contract - deployer", function () {
      it("should return true when owner calls callerIsStoredPlainSolidity()", async function () {
        const { maskingD, owner } = await loadFixture(deployMaskingDemo3Fixture);

        let isOwner = await maskingD.connect(owner).callerIsStoredPlainSolidity()

        expect(isOwner).to.eq(true)
      });
      it("should return false when owner calls callerIsStoredPlainSolidity()", async function () {
        const { maskingD, owner } = await loadFixture(deployMaskingDemo3Fixture);

        let isOwner = await maskingD.connect(owner).callerIsStoredAssemblyWrong()

        expect(isOwner).to.eq(false)
      });
      it("should return false when owner calls callerIsStoredPlainSolidity()", async function () {
        const { maskingD, owner } = await loadFixture(deployMaskingDemo3Fixture);

        let isOwner = await maskingD.connect(owner).callerIsStoredAsseblyCorrect()

        expect(isOwner).to.eq(true)
      });
    });
    describe("contract - non deployer", function () {
        it("should return false when non deployer calls callerIsStoredPlainSolidity()", async function () {
          const { maskingD, otherAccount } = await loadFixture(deployMaskingDemo3Fixture);
  
          let isOwner = await maskingD.connect(otherAccount).callerIsStoredPlainSolidity()
  
          expect(isOwner).to.eq(false)
        });
        it("should return false when non deployer calls callerIsStoredPlainSolidity()", async function () {
          const { maskingD, otherAccount } = await loadFixture(deployMaskingDemo3Fixture);
  
          let isOwner = await maskingD.connect(otherAccount).callerIsStoredAssemblyWrong()
  
          expect(isOwner).to.eq(false)
        });
        it("should return false when non deployer calls callerIsStoredPlainSolidity()", async function () {
          const { maskingD, otherAccount } = await loadFixture(deployMaskingDemo3Fixture);
  
          let isOwner = await maskingD.connect(otherAccount).callerIsStoredAsseblyCorrect()
  
          expect(isOwner).to.eq(false)
        });
      });
  });
  
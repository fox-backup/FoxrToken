const { assert, expect } = require("chai");
const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains, INITIAL_SUPPLY, NAME, SYMBOL } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("FOXRTokenUnitTest", function () {
          const multiplier = 10 ** 18;
          let foxrToken, deployer, user;
          beforeEach(async () => {
              const accounts = await ethers.getNamedAccounts();
              deployer = accounts.deployer;
              user = accounts.user;
              await deployments.fixture("all");
              foxrTokenContract = await ethers.getContract("ManualToken");
              foxrToken = foxrTokenContract.connect(user);
          });
          it("deploys", async () => {
              assert(foxrToken.address);
          });
      });

const { network } = require("hardhat");
const { developmentChains, INITIAL_SUPPLY, NAME, SYMBOL } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const args = [INITIAL_SUPPLY, NAME, SYMBOL];
    const manualToken = await deploy("ManualToken", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    log(`ManualToken deployed to ${manualToken.address}`);

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(manualToken.address, args);
    }
};

module.exports.tags = ["all", "token", "manual"];

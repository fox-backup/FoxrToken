const networkConfig = {
    31337: {
        name: "localhost",
    },
    5: {
        name: "goerli",
    },
    10: {
        name: "optimism",
    },
    420: {
        name: "optimismGoerli",
    },
};

const INITIAL_SUPPLY = "8170000";
const NAME = "Foxr Token";
const SYMBOL = "FOXR";

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
    NAME,
    SYMBOL,
};

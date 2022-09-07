require("@nomicfoundation/hardhat-toolbox");
//require("dotenv").config({ path: ".env" });

//const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

//const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ixS7xAfzcQXmPM1J8i575OO1TjC1BIur",
      accounts: ["0x9f91d614f8306735b208278c126cff8fdaed2802f759439f02add30f8012e871"],
    },
  },
};
require("@nomiclabs/hardhat-waffle");

// Initialize `dotenv` with the `.config()` function
//require("dotenv").config({ path: ".env" });

// Environment variables should now be available
// under `process.env`
const PRIVATE_KEY = "0x9f91d614f8306735b208278c126cff8fdaed2802f759439f02add30f8012e871";
const RPC_URL = "https://alfajores-forno.celo-testnet.org";

// Show an error if environment variables are missing
if (!PRIVATE_KEY) {
  console.error("Missing PRIVATE_KEY environment variable");
}

if (!RPC_URL) {
  console.error("Missing RPC_URL environment variable");
}

// Add the alfajores network to the configuration
module.exports = {
  solidity: "0.8.4",
  networks: {
    alfajores: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
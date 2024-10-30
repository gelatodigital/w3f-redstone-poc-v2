import { HardhatUserConfig } from "hardhat/config";

// PLUGINS
import "@gelatonetwork/web3-functions-sdk/hardhat-plugin";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const PK = process.env.PK;
const ALCHEMY_ID = process.env.ALCHEMY_ID;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;



const config: HardhatUserConfig = {
  // web3 functions
  w3f: {
    rootDir: "./web3-functions",
    debug: false,
    networks: ["hardhat", "volmex"], //(multiChainProvider) injects provider for these networks
  },
  // hardhat-deploy
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      forking: {
        url: `https://rpc.volmex.t.raas.gelato.cloud`,
        blockNumber: 126048,
      },
    },

    volmex: {
      accounts: PK ? [PK] : [],
      chainId: 123420000588,
      url: `https://rpc.volmex.t.raas.gelato.cloud`,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: { enabled: true, runs: 200 },
        },
      },
    ],
  },

  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },

  // hardhat-deploy
  etherscan: {
    apiKey: {
      volmex: 'your API key',
    },
    customChains: [
      {
        network: "volmex",
        chainId: 123420000588,
        urls: {
          apiURL: "https://volmex.cloud.blockscout.com/api",
          browserURL: "https://volmex.cloud.blockscout.com/"
        }
      },
    ]
  },
};

export default config;

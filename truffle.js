require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
let mnemonic = process.env["NEMONIC"];
let rinkebyKey = process.env["RINKEBY_KEY"];
let ropstenKey = process.env["ROPSTEN_KEY"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // rinkeby: {
    //   host: "localhost",
    //   provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + rinkebyKey),
    //   network_id: 4,       // Rinkeby's id
    //   gas: 8000000,        // Rinkeby has a lower block limit than mainnet      
    //   gasPrice : 10000000000,
    // },
    ropsten: {
      host: "localhost",
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + ropstenKey),
			network_id: 3,
			gas: 7000000,
			gasPrice: 100000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.6.2",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200  // Optimize for how many times you intend to run the code
        },
      }
    }
  }
};

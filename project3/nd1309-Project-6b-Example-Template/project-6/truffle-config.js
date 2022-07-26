const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
     provider: () => new HDWalletProvider("metamaskseed", `infurakey`),
       network_id: 4,       // rinkeby's id
       gas: 4500000,        // rinkeby has a lower block limit than mainnet
       gasPrice: 10000000000,
     //  timeoutBlocks: 200,
      skipDryRun: true
   },
  },
  compilers: {
    solc: {
      version:"^0.4.24",
    }
  }
};
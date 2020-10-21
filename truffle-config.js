const HDWalletProvider = require('@truffle/hdwallet-provider')
const LedgerWalletProvider = require('truffle-ledger-provider')
const { mnemonic, infuraProjectId} = require('./secrets.json')

// HDWallet
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraProjectId}`, 0, 1),
      network_id: '1',
      gasPrice: 3e9       
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraProjectId}`, 0, 1),
      network_id: '3',
      gasPrice: 3e9
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraProjectId}`, 0, 1),
      network_id: '42',     
      gasPrice: 3e9  
    }
  },
  compilers: {
    solc: {
      version: '0.6.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999
        },
        evmVersion: "istanbul"
      }
    }
  }
}


/*
// Ledger nano wallet
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    mainnet: {
      provider: () => new LedgerWalletProvider(
        {
          networkId: 1,
          askCnfirm: true,
          accountsLength: 1,
          accountsOffset: 0
        }, `https://mainnet.infura.io/v3/${infuraProjectId}`, 0, 1),
      network_id: '1',
      gasPrice: 3e9       
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        {
          networkId: 3,
          askCnfirm: true,
          accountsLength: 1,
          accountsOffset: 0
        }, `https://ropsten.infura.io/v3/${infuraProjectId}`, 0, 1),
      network_id: '3',
      gasPrice: 3e9
    },
    kovan: {
      provider: () => new HDWalletProvider(        {
        networkId: 42,
        askCnfirm: true,
        accountsLength: 1,
        accountsOffset: 0
      }, `https://kovan.infura.io/v3/${infuraProjectId}`, 0, 1),
      network_id: '42',     
      gasPrice: 3e9  
    }
  },
  compilers: {
    solc: {
      version: '0.6.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999
        },
        evmVersion: "istanbul"
      }
    }
  }
}
*/
const HDWallet = require('ethereum-hdwallet')
const bip39 = require('bip39')

const mnemonic = bip39.generateMnemonic()

console.log(`Mnemonics: ${mnemonic}`)

const hdwallet = HDWallet.fromMnemonic(mnemonic)

console.log(`Public Key: ${hdwallet.derive(`m/44'/60'/0'/0/0`).getPublicKey().toString('hex')}`) 
console.log(`Private Key: ${hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')}`)
console.log(`Address: 0x${hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')}`)
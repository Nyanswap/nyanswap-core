const ethers = require('ethers');
const ropsten = require('../.openzeppelin/ropsten.json')
const abis = require('../build/contracts/UniswapV2Router02.json')
const secret = require('../secrets.json')
const provider = ethers.providers.getDefaultProvider('ropsten');

const address = ropsten.proxies["nyanswap-core/UniswapV2Router02"][0].address
const abi = abis.abi

const wallet = ethers.Wallet.fromMnemonic(secret.mnemonic).connect(provider)

var contract = new ethers.Contract(address, abi, wallet);

const tokenA = '0xe8eb8dfcbefc1bd9838ef4b33729cd608b2830e3'
const tokenB = '0x6ccf5bf4c8772accfadf9464768a0e2c50c3c543'
const amountTokenADesired =  1000000
const amountTokenBDesired =  10000
const amountTokenAMin = 0
const amountTokenBMin = 0
const to = '0x64B2f335ac4aBC0a3000C5977C90Ff44A8BD1723'
const deadline = Math.round(Date.now()/1000) + 1000

const options = { gasLimit: 210000};
const sendPromise = contract.addLiquidity(tokenA, tokenB, amountTokenADesired, amountTokenBDesired, amountTokenAMin, amountTokenBMin, to, deadline, options);

sendPromise.then(function(transaction){
  console.log(transaction);
}).catch((e)=>{
  console.error(e)
});


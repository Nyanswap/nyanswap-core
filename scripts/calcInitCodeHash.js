const util = require('@ethersproject/solidity')
const { bytecode } = require('../build/contracts/UniswapV2Pair.json')

const hash = util.keccak256(['bytes'], [bytecode])

console.log('==============================================')

console.log(`INIT CODE PAIR HASH: ${hash}`)

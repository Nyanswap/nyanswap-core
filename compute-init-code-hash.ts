import { keccak256 } from '@ethersproject/solidity'
import { bytecode } from './build/contracts/UniswapV2Pair.json'

console.log(bytecode)

const hash = keccak256(['bytes'], [bytecode])

console.log('=====================')

console.log(hash)

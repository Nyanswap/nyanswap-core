const Factory  = artifacts.require('uniswapv2/UniswapV2Factory.sol')
const Router  = artifacts.require('uniswapv2/UniswapV2Router02.sol')
const WETH = artifacts.require('uniswapv2/WETH9.sol')

module.exports = async function(deployer, network, accounts) {
  const [admin, _] = accounts 
  console.log(`Deployment address: ${admin}`)

  let WETHAddress
  if (network == 'mainnet') {
    WETHAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  } else if (network == 'ropsten') {
    WETHAddress = '0xc778417E063141139Fce010982780140Aa0cD5Ab'
  } else if (network == 'kovan') {
    WETHAddress = '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
  } else {
    await deployer.deploy(WETH)
    const weth = await WETH.deployed()
    WETHAddress = weth.address
  }
  console.log(`WETH contract address: ${WETHAddress}`)

  await deployer.deploy(Factory, admin)
  const factory = await Factory.deployed()
  console.log(`Factory contract address: ${factory.address}`)
  console.log(`INIT CODE PAIR HASH: ${await factory.initCodePairHash()}`) 
  console.log(`setFeeToSetter address: ${await factory.feeToSetter()}`)

  await deployer.deploy(Router, factory.address, WETHAddress)
  const router = await Router.deployed()
  console.log(`Router contract address: ${router.address}`)
};

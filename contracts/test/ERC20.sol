pragma solidity =0.5.16;

import '../NyanswapERC20.sol';

contract ERC20 is NyanswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
    constructor(uint256 _initialSupply) ERC20("SimpleToken", "TKN") {
        _mint(msg.sender, _initialSupply);
    }
}

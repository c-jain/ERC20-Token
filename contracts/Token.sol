pragma solidity ^0.6.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  constructor() public ERC20("my test token", "CHAK") {
        _mint(msg.sender, 1000000 * (10**18));
    }
}
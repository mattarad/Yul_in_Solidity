// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract MaskingDemo0 {
    uint public s;

    constructor() {
        s = ((block.timestamp << 160) | uint(uint160(msg.sender)));
    }

    // Returns true - if caller is deployer
    function callerIsStoredPlainSolidity() public view returns (bool result) {
        address storedCaller = address(uint160(s));
        result = storedCaller == msg.sender;
    }

    // Returns false - if caller is deployer
    function callerIsStoredAssemblyWrong() public view returns (bool result) {
        address storedCaller = address(uint160(s));
        assembly {
            result := eq(storedCaller, caller())
        }
    }

    // Returns true - if caller is deployer
    function callerIsStoredAsseblyCorrect() public view returns (bool result) {
        address storedCaller = address(uint160(s));
        assembly {
            storedCaller := shr(96, shl(96, storedCaller))
            result := eq(storedCaller, caller())
        }
    }
}

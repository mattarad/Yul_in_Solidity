// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract SumDemo0 {
    /*
     * @dev function sum adds the uints from the array param and returns the sum
     */
    function sum(uint[] memory a) public pure returns (uint result) {
        assembly {
            let n := mload(a)
            for {
                let i := 0
            } lt(i, n) {
                i := add(i, 1)
            } {
                result := add(result, mload(add(add(a, 0x20), mul(i, 0x20))))
            }
        }
    }
}

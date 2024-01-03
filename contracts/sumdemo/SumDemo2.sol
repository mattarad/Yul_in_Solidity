// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract SumDemo2 {
    /*
     * @dev function sum adds the uints from the array param and returns the sum
     */
    function sum(uint[] memory a) public pure returns (uint result) {
        assembly {
            let n := mload(a)
            let end := add(add(a, 0x20), mul(0x20, n))
            for {
                let i := add(a, 0x20)
            } iszero(eq(i, end)) {
                i := add(i, 0x20)
            } {
                result := add(result, mload(i))
            }
        }
    }
}

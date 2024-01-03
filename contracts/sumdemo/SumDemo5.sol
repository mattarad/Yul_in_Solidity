// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract SumDemo5 {
    /*
     * @dev function sum adds the uints from the array param and returns the sum
     */
    function sum(uint[] memory a) public pure returns (uint result) {
        assembly {
            let n := mload(a)
            if n {
                let end := add(add(a, 0x20), shl(5, n))
                let i := add(a, 0x20)
                for {

                } 1 {

                } {
                    result := add(result, mload(i))
                    i := add(i, 0x20)
                    if eq(i, end) {
                        break
                    }
                }
            }
        }
    }
}

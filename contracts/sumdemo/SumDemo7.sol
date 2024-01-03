// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract SumDemo7 {
    /*
     * @dev function sum adds the uints from the array param and returns the sum
     * this function can you calldata instead of memory for param
     */
    function sum(uint[] calldata a) public pure returns (uint result) {
        assembly {
            if a.length {
                let end := add(a.offset, shl(5, a.length))
                let i := a.offset
                for {

                } 1 {

                } {
                    result := add(result, calldataload(i))
                    i := add(i, 0x20)
                    if iszero(lt(i, end)) {
                        break
                    }
                }
            }
        }
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract LookupDemo2 {
    function lookup(uint i) public pure returns (uint result) {
        assembly {
            for {

            } 1 {

            } {
                if iszero(i) {
                    result := 114876219837621409852413
                    break
                }
                if iszero(gt(i, 1)) {
                    result := 219837621983761286387126
                    break
                }
                if iszero(gt(i, 2)) {
                    result := 325143876215381275638172
                    break
                }
                if iszero(gt(i, 3)) {
                    result := 412139367868763871954915
                    break
                }
                result := 529817320195632014987113
                break
            }
        }
    }
}

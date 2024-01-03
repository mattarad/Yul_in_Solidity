// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract LookupDemo0 {
    function lookup(uint i) public pure returns (uint result) {
        assembly {
            switch i
            case 0 {
                result := 114876219837621409852413
            }
            case 1 {
                result := 219837621983761286387126
            }
            case 2 {
                result := 325143876215381275638172
            }
            case 3 {
                result := 412139367868763871954915
            }
            default {
                result := 529817320195632014987113
            }
        }
    }
}

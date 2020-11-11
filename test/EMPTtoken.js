const { isMainThread } = require("worker_threads");
const assert = require('assert');

const KRPTtoken = artifacts.require('KRPTtoken');

contract("KRPTtoken", accounts => {
    it("should put 2880000000 KRPTtoken in the first account", () => 
        KRPTtoken.deployed()
        .then( instance => {
                return instance.balanceOf.call(accounts[0]);
            }
        )
        .then(balance => {
            assert.equal(
                balance.valueOf(),
                2880000000 * (10 ** 18),
                "2880000000 wasn't in the first account"
            )
        })
    );

    it( "has a name 'KRPTtoken' ", () => 
        KRPTtoken.deployed()
        .then( instance => {
                return instance.name.call();
            }
        )
        .then(name => {
            assert.equal(name,"KRPTtoken","name is not KRPTtoken");
        })
    );

    it( "has a symbol 'krpt' ", () => 
        KRPTtoken.deployed()
        .then( instance => {
                return instance.symbol.call();
            }
        )
        .then(symbol => {
            assert.equal(symbol,"krpt","symbol is not krpt");
        })
    );

    it( "decimals is 18 ", () => 
        KRPTtoken.deployed()
        .then( instance => {
                return instance.decimals.call();
            }
        )
        .then(decimals => {
            assert.equal(decimals,18,"decimals is not 18");
        })
    );
})
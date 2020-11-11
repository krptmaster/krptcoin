var KRPTtoken = artifacts.require('KRPTtoken');

module.exports = function(deployer) {
    deployer.deploy(KRPTtoken);
};
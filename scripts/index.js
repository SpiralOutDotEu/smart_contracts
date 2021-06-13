// scripts/index.js
module.exports = async function main(callback) {
    try {
        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)   
        
        // Set up a Truffle contract, representing our deployed Box instance
        const Box = artifacts.require("Box");
        const box = await Box.deployed();

        // Call the retrieve() function of the deployed Box contract
        value = await box.retrieve();
        console.log("Box value is", value.toString());

        // Send a transaction to store() a new value in the Box
        new_value = parseInt(value) + 1
        await box.store(new_value);

        // Call the retrieve() function of the deployed Box contract
        value = await box.retrieve();
        console.log("Box value now is", value.toString());
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
  }

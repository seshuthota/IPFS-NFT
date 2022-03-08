const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

    const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";

    const LW3Punks = await ethers.getContractFactory("LW3Punks");

    const deployedLW3Punks = await LW3Punks.deploy(metadataURL);

    await deployedLW3Punks.deployed();

    console.log("LW3Punks contract deployed with addres: ", deployedLW3Punks.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
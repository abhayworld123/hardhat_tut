// const {hexStripZeroes} = require("@ethersproject/bytes")

const { ethers } = require("hardhat");

// const { ethers } = require("ethers");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying ", deployer.address);

  console.log("Account Balance ", (await deployer.getBalance()).toString());

  // const Token = await ethers.getContractFactory("WavePortal");
  // const token = await Token.deploy();
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();

  console.log("Wave Portal ", waveContract.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
  });

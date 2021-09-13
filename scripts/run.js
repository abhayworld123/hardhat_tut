// const {hexStripZeroes} = require("@ethersproject/bytes")

// const { ethers } = require("ethers");

async function main() {
  const [owner, randoperson] = await ethers.getSigners();

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave(" this is message");
  await waveTxn.wait();

  waveTxn = await waveContract.wave(" this is another message");
  await waveTxn.wait();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
  });

// const {hexStripZeroes} = require("@ethersproject/bytes")

// const { ethers } = require("ethers");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying ", deployer.address);

  console.log("Account Balance ", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("WavePortal");
  const token = await Token.deploy();

  console.log("Wave Portal ", token.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
  });

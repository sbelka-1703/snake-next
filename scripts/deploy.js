
const hre = require("hardhat");

async function main() {
 

  // We get the contract to deploy
  const Snake = await hre.ethers.getContractFactory("Snake");
  const snake = await Snake.deploy();

  await snake.deployed();

  console.log("Snake deployed to:", snake.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

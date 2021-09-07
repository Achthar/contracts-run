
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  const cakeFactory = await ethers.getContractFactory("CakeToken");
  //cakeToken = (await cakeFactory.deploy()) as CakeToken;
  // await cakeToken.deployed();
  const cakeToken =  await cakeFactory.attach("0x7b95aD33D57a72F9653bcc749e14E571A9FaB0C2")

  // expect(initialCount).to.eq(0);
  const number = 1000;
  await cakeToken["mint_natural(address,uint256)"]("0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B", number);    // 3

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

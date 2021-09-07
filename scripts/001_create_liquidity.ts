
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';


import * as farms from './addresses/farms.json';
import * as base from './addresses/base.json'
import * as periphery from './addresses/swap-periphery.json'

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  // await cakeToken.deployed();
  const pancakeFactory =  await (await ethers.getContractFactory("PancakeFactory")).attach(farms.CakeToken)

  // const pancakeRouter = ;

  const pancakeRouter = await (await ethers.getContractFactory("PancakeRouter")).attach(periphery.PancakeRouter);

  // expect(initialCount).to.eq(0);
  await pancakeFactory.createPair(
    farms.CakeToken, // cake
    base.WBNB  // WBNB
  );

  await pancakeRouter.addLiquidity(
    farms.CakeToken, // cake
    base.WBNB,  // WBNB
    100, // amount 1
    0.05, // amount 2
    100, // minamount 1
    0.05, // min amount 2
  )

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

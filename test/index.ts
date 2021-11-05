import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

describe("SimpleToken", function () {
  it("Should deploy a SimpleToken", async function () {
    const initialSupply = BigNumber.from(500000000).mul(
      BigNumber.from(10).pow(18)
    );

    const [alice, bob] = await ethers.getSigners();
    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    const simpleToken = await SimpleToken.connect(alice).deploy(initialSupply);
    await simpleToken.deployed();

    expect(await simpleToken.totalSupply())
      .to.equal(initialSupply)
      .to.equal(await simpleToken.balanceOf(alice.address));

    await simpleToken.transfer(bob.address, 500);

    expect(await simpleToken.balanceOf(bob.address)).eq(500);
    expect(await simpleToken.balanceOf(alice.address)).eq(
      initialSupply.sub(500)
    );
  });
});

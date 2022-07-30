const {ethers, Signer}=require ('ethers');
const transfer=require('./transfer.json');

const RPC ='https://ropsten.infura.io/v3/384fa25532f04ebdab0bbed645b5debf';

const account1 ='0x2aEc585725069B0Ec59F31BDb06aC6a16Bf01895';
const privatekey ='44b260f00d55e09688f514a3d44ed91a99835040ef79f3ef2c40580b2c07e429';

const provider =new ethers.providers.JsonRpcProvider(RPC)

const wallet =new ethers.Wallet(privatekey,provider);

const contractAddress ="0xeE7b39e4e6cc247475AC3769123Ea2ECe7208338";
const ABI =transfer.abi;

async function call(){
    const contract =new ethers.Contract(contractAddress,ABI,wallet);
    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`);
    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`);
     
    const tx=await contract._transfer(account1,{
        value : ethers.utils.parseEther('0.5')
    })
    await tx.wait();
    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`);
    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`);
    console.log(tx);

}
call();

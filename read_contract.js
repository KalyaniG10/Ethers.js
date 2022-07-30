const {ethers}=require ('ethers');
const transfer=require('./transfer.json');

const RPC ='https://ropsten.infura.io/v3/384fa25532f04ebdab0bbed645b5debf';

const provider =new ethers.providers.JsonRpcProvider(RPC)

const contractAddress ="0xeE7b39e4e6cc247475AC3769123Ea2ECe7208338";
const ABI =transfer.abi;

async function call(){
    const contract =new ethers.Contract(contractAddress,ABI,provider);
    console.log(`The address of owner:${await contract.callOwner()}`);
}
call();

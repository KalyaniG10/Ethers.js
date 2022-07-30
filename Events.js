const {ethers}=require ('ethers');
const transfer=require('./transfer.json');

const RPC ='https://ropsten.infura.io/v3/384fa25532f04ebdab0bbed645b5debf';

//const account1 ='0x2aEc585725069B0Ec59F31BDb06aC6a16Bf01895';
//const privatekey ='44b260f00d55e09688f514a3d44ed91a99835040ef79f3ef2c40580b2c07e429';

const provider =new ethers.providers.JsonRpcProvider(RPC)

//const wallet =new ethers.Wallet(privatekey,provider);

const contractAddress ="0xd4a65CaB9ee5076B122377fD4Afcc3E932a035Ad";
const ABI =transfer.abi;

async function call(){
    const contract =new ethers.Contract(contractAddress,ABI,provider);

    const trans= contract.filters.transactions(); 
    const transactions =await contract .queryFilter(trans);
    
    transactions.map((item)=>{
        console.log(item.args.to,":",ethers.utils.formatEther(item.args.amount))

    });
    
}


call(); 

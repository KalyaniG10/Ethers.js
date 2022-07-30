const {ethers}=require ('ethers');

const RPC ='https://ropsten.infura.io/v3/384fa25532f04ebdab0bbed645b5debf';

const account1 ='0x2aEc585725069B0Ec59F31BDb06aC6a16Bf01895';
const privatekey ='44b260f00d55e09688f514a3d44ed91a99835040ef79f3ef2c40580b2c07e429';

const provider =new ethers.providers.JsonRpcProvider(RPC)

const wallet =new ethers.Wallet(privatekey,provider);

async function call(){
    const bal=await provider.getBalance(account1);
    console.log(account1,":",ethers.utils.formatEther(bal));
    console.log(await wallet.getAddress(),":",ethers.utils.formatEther(await wallet.getBalance()));
    
    const trans=await wallet.sendTransaction({
        to:account1,
        value:ethers.utils.parseEther('1')
    })
    await trans.wait();
    const bal2=await provider.getBalance(account1);
    console.log(account1,":",ethers.utils.formatEther(bal2));
    console.log(await wallet.getAddress(),":",ethers.utils.formatEther(await wallet.getBalance()));
     console.log(trans);
    

}
call();
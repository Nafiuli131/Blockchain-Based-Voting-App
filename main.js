const EC = require('elliptic').ec;

const ec = new EC('secp256k1'); 
const{Blockchain,Transaction}=require('./blockchain');

function test(F,T,K)  {
  
    const myKey = ec.keyFromPrivate(K);
    const myWalletAddress = myKey.getPublic('hex');
    //Candidate
    const myWalletAddress4 =T;
    
    
    const savjeeCoin = new Blockchain();
    // Make a transaction 
    const tx1 = new Transaction(myWalletAddress,myWalletAddress4 , 1,1);
    tx1.signTransaction(myKey);
    savjeeCoin.addTransaction(tx1);
    //Voter 1
    // If the voter is already voted
    if(savjeeCoin.getBalanceOfAddress(F)===0){
       
        
        console.log('You have already voted');
    }
    
    //When balance is 1 
    if(savjeeCoin.getBalanceOfAddress(myWalletAddress)!==0){
    // Mine block
    console.log('Starting the miner...');
    savjeeCoin.minePendingTransactions(myWalletAddress);
    console.log();
    console.log('Vote valid?', savjeeCoin.isChainValid());
    }
    
    
    console.log('\n Number of Votes (Candidate1)', savjeeCoin.getVoteOfAddress(myWalletAddress4,myWalletAddress));
    var a=savjeeCoin.getVoteOfAddress(myWalletAddress4,myWalletAddress);
    return a;
    
 }

 function test2(F,T,K){
    const myKey = ec.keyFromPrivate(K);
    const myWalletAddress = myKey.getPublic('hex');
    //Candidate
    const myWalletAddress4 =T;
    
    
    const savjeeCoin = new Blockchain();
   
    console.log('\n Number of Votes (Candidate1)', savjeeCoin.getVoteOfAddress(myWalletAddress4,myWalletAddress));
    var a=savjeeCoin.getVoteOfAddress(myWalletAddress4,myWalletAddress);
    return a;

 }
module.exports={test,test2}

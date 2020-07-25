const{Blockchain,Transaction}=require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Voter
const myKey = ec.keyFromPrivate('f296d61a85654f19c8b9fd46daf8c9bd36ee514422982c44574fb41b224bd261');
const myWalletAddress = myKey.getPublic('hex');

const myKey2 = ec.keyFromPrivate('63a26d444bf8e51714d99df07515a82cf4879b047580e487d211bfd7565018bf');
const myWalletAddress2 = myKey2.getPublic('hex');


const savjeeCoin = new Blockchain();
// Make a transaction 
const tx1 = new Transaction(myWalletAddress,myWalletAddress2 , 2,1);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

// If the voter is already voted
if(savjeeCoin.getBalanceOfAddress(myWalletAddress)===0){
 
    
    console.log('\n You have already voted');
    
}

//When balance is 1 
if(savjeeCoin.getBalanceOfAddress(myWalletAddress)!==0 && tx1.amount===1 && tx1.vote===1){

// Mine block
console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);
console.log();
console.log('\n Vote valid?', savjeeCoin.isChainValid());
    
}


console.log('\n Number of Votes (Candidate1)', savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress));

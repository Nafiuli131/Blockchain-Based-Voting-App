const{Blockchain,Transaction}=require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Create key object
//Voter
const myKey = ec.keyFromPrivate('f296d61a85654f19c8b9fd46daf8c9bd36ee514422982c44574fb41b224bd261');
const myWalletAddress = myKey.getPublic('hex');
//Candidate


const myKey2 = ec.keyFromPrivate('63a26d444bf8e51714d99df07515a82cf4879b047580e487d211bfd7565018bf');
const myWalletAddress2 = myKey2.getPublic('hex');
//test
const myKey3 = ec.keyFromPrivate('a62079cf8bbf0e2aceac39ec45502dc621d07b5867b78400b6a2e0a9cbea9522');
const myWalletAddress3 = myKey3.getPublic('hex');

const myKey4 = ec.keyFromPrivate('6ccb03f23953cdf241a278b7def1c01b5455d7d3f54af38ab439e1f6d9252d7a');
const myWalletAddress4 = myKey4.getPublic('hex');

const myKey5 = ec.keyFromPrivate('a8b84fa6bd1370b1aaa5b939995c3f6ec91f04bac1ed382e1affda753ee62ebf');
const myWalletAddress5 = myKey5.getPublic('hex');


// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();
/*console.log('\n Balance of voter is', savjeeCoin.getBalanceOfAddress(myWalletAddress));
//Count Vote
console.log('\n Vote of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress));
//console.log('\n Vote3 of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress3,myWalletAddress2));
//*/

// Make a transaction 
const tx1 = new Transaction(myWalletAddress,myWalletAddress4 , 1,1);

tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

// If the voter is already voted
if(savjeeCoin.getBalanceOfAddress(myWalletAddress)===0){
   
    
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

/*console.log('\n Vote of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress));
console.log('\n Balance of voter is', savjeeCoin.getBalanceOfAddress(myWalletAddress));*/

const tx3 = new Transaction(myWalletAddress2,myWalletAddress4 , 1,1);

tx3.signTransaction(myKey2);
savjeeCoin.addTransaction(tx3);

//console.log('\n Balance of voter123 is', savjeeCoin.getBalanceOfAddress2(myWalletAddress2,myWalletAddress));
// If the voter is already voted
if(savjeeCoin.getBalanceOfAddress(myWalletAddress2)===0){
   
    
    console.log('You have already voted');
}


//When balance is 1 
if(savjeeCoin.getBalanceOfAddress(myWalletAddress2)!==0){
// Mine block
console.log('Starting the miner...');
console.log();
savjeeCoin.minePendingTransactions(myWalletAddress2);
console.log('Vote valid?', savjeeCoin.isChainValid());
}
console.log('\n Vote1 of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress4,myWalletAddress));
console.log('\n Vote2 of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress5,myWalletAddress3));


const tx4 = new Transaction(myWalletAddress3,myWalletAddress5 , 1,1);

tx4.signTransaction(myKey3);
savjeeCoin.addTransaction(tx4);


// If the voter is already voted
if(savjeeCoin.getBalanceOfAddress(myWalletAddress2)===0){
   
    
    console.log('You have already voted');
}


//When balance is 1 
if(savjeeCoin.getBalanceOfAddress(myWalletAddress2)!==0){
// Mine block
console.log('Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress2);
console.log();
console.log('Vote valid?', savjeeCoin.isChainValid());
}


console.log('\n Vote of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress4,myWalletAddress));
console.log('\n Vote of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress5,myWalletAddress3));



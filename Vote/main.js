const{Blockchain,Transaction}=require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Create key object
const myKey = ec.keyFromPrivate('f296d61a85654f19c8b9fd46daf8c9bd36ee514422982c44574fb41b224bd261');
const myWalletAddress = myKey.getPublic('hex');

const myKey2 = ec.keyFromPrivate('63a26d444bf8e51714d99df07515a82cf4879b047580e487d211bfd7565018bf');
const myWalletAddress2 = myKey2.getPublic('hex');

// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();
console.log('\n Balance of voter is', savjeeCoin.getBalanceOfAddress(myWalletAddress));

console.log('\n Vote of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress));

// Make a transaction
const tx1 = new Transaction(myWalletAddress, '04ba46576c42654c400dcfac185921c309b557c0ebd4e8d86fb68e3af8393f02fc321341ba63a08dbe53999e62433c23438ea29546bfbf32cfd278bc01a18880b9', 1,1);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);


// Mine block
console.log('Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);


console.log('\n Vote of candidate is', savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress));
console.log('\n Balance of voter is', savjeeCoin.getBalanceOfAddress(myWalletAddress));
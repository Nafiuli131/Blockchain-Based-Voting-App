var app = require("express")(); 
const{Blockchain,Transaction}=require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const savjeeCoin = new Blockchain();


    

var app = require("express")(); 
var bodyParser = require("body-parser"); 
const keygenerator= require('./keygenerator');
const main= require('./main');

var urlencodedParser = bodyParser.urlencoded({ extended: false })  
var privkey = keygenerator.generatePrivate()
var pubkey = keygenerator.generatePublic()


global.ToAddress = " ";
global.MyKey=" ";

global.a=0;
global.b=0;




//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

//Instead of sending Hello World, we render index.ejs
//app.get("/", (req, res) => { res.render("index", { private:privkey ,public: pubkey}); });
//app.get("/test", (req, res) => { res.render("index", { private:privkey ,public: pubkey}); });


app.get("/", (req, res) => { res.render("index")});
//app.post("/process_post", urlencodedParser, (req, res) => { res.render("test", { first_name:req.body.first_name ,last_name:req.body.last_name }); });
app.post("/valid", urlencodedParser, (req, res) => { 
    var c1='0443a498c09b97aac9870fbdca0a6f980f150b0b469a69d8abc0a0470a521384509a08d2e5ccf74e0b9edd62491ea2b684164d77aef0542fcd82e100eb00c9d622';
    var c2='0433dd9a77f0e81f7a8b2ff8eec684acad063649e983e46f4c2758762a9d309ad70708cca27823652486cc7d908027b06df8292069bdc0bf32e3a16e1b87c05751';
    MyKey=req.body.Address;
    ToAddress=req.body.TAddress;
    console.log(ToAddress);
    
    
    // Voter
    const myKey = ec.keyFromPrivate(MyKey);
    const myWalletAddress = myKey.getPublic('hex');
    const myWalletAddress2 =ToAddress;
    
    // Make a transaction 
    const tx1 = new Transaction(myWalletAddress,myWalletAddress2 , 1,1);
    tx1.signTransaction(myKey);
    savjeeCoin.addTransaction(tx1);
    //Voter 1
    // If the voter is already voted
    if(savjeeCoin.getBalanceOfAddress(myWalletAddress)===0){
       
        
      var s='You have already voted';
    }
    
    //When balance is 1 
    if(savjeeCoin.getBalanceOfAddress(myWalletAddress)!==0){
    // Mine block
    console.log('Starting the miner...');
    savjeeCoin.minePendingTransactions(myWalletAddress);
    console.log();
    console.log('Vote valid?', savjeeCoin.isChainValid());
    var t='Your Vote is Valid'
    }
    

    if(myWalletAddress2===c1){
    a=savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress)
    }
    if(myWalletAddress2===c2){
        b=savjeeCoin.getVoteOfAddress(myWalletAddress2,myWalletAddress)
        }
     res.render("test", { v1:a ,v2: b,j1:s,j2:t}); });


     app.get("/result", (req, res) => { res.render("count", {v1:a ,v2: b}); });

app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });
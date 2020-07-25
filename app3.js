var app = require("express")(); 
var bodyParser = require("body-parser"); 
const keygenerator= require('./keygenerator');
const main= require('./main');
const{Blockchain,Transaction}=require('./blockchain');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
var privkey = keygenerator.generatePrivate()
var pubkey = keygenerator.generatePublic()


global.FromAddress = " ";
global.ToAddress = " ";
global.MyKey=" ";
global.Vcount=" ";



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
app.post("/process_post", urlencodedParser, (req, res) => { 
    
    MyKey=req.body.Adreess;
    FromAddress=req.body.FAdreess;
    FromAddress=req.body.Tdreess;

    
    
    res.render("test"); });

    var a=main.test(FromAddress,FromAddress,MyKey);
    
    /*const savjeeCoin = new Blockchain();
    // Make a transaction 
    const tx1 = new Transaction(FromAddress,ToAddress,1,1);
    tx1.signTransaction(MyKey);
    savjeeCoin.addTransaction(tx1);
    //Voter 1
    // If the voter is already voted
    if(savjeeCoin.getBalanceOfAddress(FromAddress)===0){
       
        
        console.log('You have already voted');
    }
    
    //When balance is 1 
    if(savjeeCoin.getBalanceOfAddress(FromAddress)!==0){
    // Mine block
    console.log('Starting the miner...');
    savjeeCoin.minePendingTransactions(FromAddress);
    console.log();
    console.log('Vote valid?', savjeeCoin.isChainValid());
    }
    */
    


app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });
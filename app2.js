var app = require("express")(); 
var bodyParser = require("body-parser"); 
const keygenerator= require('./keygenerator');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
var privkey = keygenerator.generatePrivate()
var pubkey = keygenerator.generatePublic()
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
/*app.post('/process_post', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format  
    
        first_name:req.body.first_name; 
        last_name:req.body.last_name ; 
    console.log(first_name);  
    res.end(JSON.stringify(response));  
 }) */ 



 app.post("/process_post", urlencodedParser, (req, res) => { 
     
    VoteT(req.body.first_name,req.body.last_name);
    
    res.render("test", { first_name:req.body.first_name ,last_name:req.body.last_name }); });


app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });
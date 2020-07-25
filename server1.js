var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});


const keygenerator= require('./keygenerator');

//assigning variable with needed value
var privkey = keygenerator.generatePrivate()
console.log('private key from keygenerator: ',privkey);

var pubkey = keygenerator.generatePublic()
console.log('public key from keygenerator: ',pubkey);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "INSERT INTO testkeys (private,public) VALUES ?";
  var values = [[privkey, pubkey]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //since we are in a request handler function
  //we're using readFile instead of readFileSync
  fs.readFile('login.html', 'utf-8', function(err, content) {
    if (err) {
      res.end('error occurred');
      return;
    }
    var renderedHtml = ejs.render(content, {privatekeyhtml: privkey, publickeyhtml: pubkey});  //get redered HTML code
    res.end(renderedHtml);
  });
}).listen(2030);
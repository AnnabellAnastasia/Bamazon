var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "LocalHost",
    port:8889,
    user:"root",
    password:"root",
    database:"bamazon"
})
connection.connect(function(err){
    if(err) throw err;
    console.log("connection successful!");
    makeTable();
})
var makeTable = function(){
    connection.query("SELECT*FROM products", function(err,res){
        for(var i=0; i<res.length;i++){
            console.log(res[i].item)
        }
    })
}
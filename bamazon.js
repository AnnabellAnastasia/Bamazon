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
            console.log(res[i].item+" || " +res[i].productname+" || "+ res[i].departmentname+" || "+res[i].price+" || "+res[i].stockquantity+"\n");

        }
        promptCustomer(res);
    })
}
var promptCustomer = function(res){
    inquirer.prompt([{
        type:'input',
        name:'choise',
        message:"What would you like to purchase? [Quit with Q}"
    }]).then(function(answer){
        var correct = false;
        for(var i = 0;i,res.length;i++){
            if(res[i].productname==answer.choice){
                correct=true;
                var productname=answer.choice;
                var id=i;
            }
        }
    })
}
const inquirer = require("inquirer")
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});
function purchaseStock(name, department, price, quantity, callback){
    let query = 'SELECT * FROM products'
    connection.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log(res)
        }
        callback(res);

    });
}
function closeConnection(){
    closeConnection.end();
}
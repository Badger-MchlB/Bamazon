const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazondb"
});
console.log("Test");
connection.connect(function(err) {
  if (err) {
    console.error("text");
    throw (err);
  }
});
console.log("Test2");
purchaseStock();
function purchaseStock(name, department, price, quantity, callback) {
  let query = "SELECT * FROM products";
  connection.query(query, (err, res) => {
    if (err) throw err;
    else {
      console.table(res);
      promptAction(res);
    }
  });
}
function promptAction(inventory) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the ID of the item you're looking to buy?",
        name: "choice"
      }
    ])
    .then((val) => {
      let choiceId = parseInt(val.choice);
      let product = checkInventory(choiceId, inventory);
      console.log(product)
      if (inventory) {
        buyItem(product);
      } else {
        console.log("Sorry, we don't have that item.");
        purchaseStock();
      }
    });
}
function buyItem(product) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "How many are you looking to buy?",
        name: "itemQuantity"
      }
    ])
    .then(function(val) {
      let quantity = parseInt(val.itemQuantity)
      if (quantity > product.stock_quantity) {
        console.log("Sorry, we don't have that many available.");
        purchaseStock();
      } else {
        buyItemSuccess(product, quantity);
      }
    });
}
function buyItemSuccess(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
    [quantity, product.id],
    function(err, res) {
      console.log(
        "\nSuccessfully purchased " +
          quantity +
          "" +
          product.product_name +
          "'s!"
      );
      purchaseStock();
    }
  );
}
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === choiceId) {
      return inventory[i];
    }
  }
  return null;
}
function closeConnection() {
  closeConnection.end();
}
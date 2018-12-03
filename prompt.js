const inquirer = require('inquirer');
const stock = require('./data');

function promptAction(){
    let choices = product_name.map(e => e.product_name);
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the ID of the item you're looking to buy?",
            name: 'itemName',
        },
        {    
        type: 'input',

        }
    ])
    .then(answers => {
        console.log(answers.itemName)
        if (answers.itemName == product_name[i]){
            buyItem()
        }
        else {
            console.log ("Sorry, we don't have that item.")

    }
},
function buyItem (){
    inquirer.prompt([
        {
        type: 'input',
        message: 'How many are you looking to buy?',
        name: 'itemQuantity'
        }
    ])
.then(answers => {
    if (answers.itemQuantity > stock_quantity[i]){
        console.log ("Sorry, we don't have that many available.")
    }
    else {
    buyItemSuccess ()
    }

    }
function buyItemSuccess(){

}
    // module.exports = {
//     promptAction: promptAction
// 
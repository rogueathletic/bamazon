const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hMw8EgmunkRDyTFMMb7]f96Nkei6Fsx",
    database: "bamazon"
});
//if error say error
connection.connect(function(err) {
    if (err) throw err;
    availableProducts();
});
//show available products
function availableProducts() {
    console.log("\nBike Shop Merchandise: \n");
    connection.query("SELECT id, productName, price FROM products", function(err, results) {
        if (err) throw err;
        console.table(results);
        startShopping();
    });
}

function startShopping() {
    inquirer.prompt([
        {
            name: "itemID",
            type: "input",
            message: "Please enter the ID Number for the Item you wish to buy: "
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter the # of items you wish to buy:"
        }
    ]).then(function(answer) {
        connection.query("SELECT id, productName, departmentName, price FROM products WHERE ?", { id: answer.itemID }, function(err, results) {
            if (err) throw err;
            if (results[0].stockQuantity >= answer.quantity) {
                var itemsRemaining = results[0].stockQuantity - answer.quantity;
                // var purchaseTotal = answer.quantity * results[0].price;
                var purchaseTotal = answer.quantity * results[3];
                connection.query(`UPDATE products SET stockQuantity=${itemsRemaining} WHERE id=${answer.itemID}`, function(err, results) {
                    if (err) throw err;
                    console.log(`Your total is: ${purchaseTotal}`);
                    continueShopping();
                });
            } 
            else {
                console.log("Unfortunatly at this time we are out of stock. Please check back later.");
                continueShopping();
            }
        });
    });
}

function continueShopping () {
    inquirer.prompt([
        {
            name: "tryAgain",
            type: "confirm",
            message: "Would you like to continue ordering? "
        }
    ]).then(function (answer) {
        if (answer.tryAgain) {
            availableProducts();
        } else {
            connection.query("SELECT * FROM products", function(err, results) {
                if (err) throw err;
                console.table(results);
            });
            console.log("Your session has ended.  Thank you for shopping Bike Shop");
        }
    });
}
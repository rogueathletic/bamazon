const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');
var keys = require("./keys");
// <------ connection is the log in info for the app
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hMw8EgmunkRDyTFMMb7]f96Nkei6Fsx",
    database: "bamazon"
});
// <------ how your are notified if there was an error
connection.connect(function (err) {
    if (err) throw err;
    availableProducts();
});
// <------ how the invintory comma seperated variable list is brought into the app
function availableProducts() {
    console.log("\nBike Shop Merchandise: \n");
    connection.query("SELECT id, productName, price FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
        startShopping();
    });
}
// <------ the initial interactions between the consumer and the database. the questions responses will yeild a unique response for different info added
function startShopping() {
    inquirer.prompt([{
            name: "itemID",
            type: "input",
            message: "Please enter the ID Number for the Item you wish to buy: "
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter the # of items you wish to buy:"
        }
    ]).then(function (answer) {
        if (!(answer.itemID && answer.quantity)) {
            continueShopping();
            return;
        }
        connection.query("SELECT * FROM products WHERE ?", {
            id: answer.itemID
        }, function (err, results) {
            if (err) throw err;
            if (results[0].stockQuantity >= answer.quantity) {
                var itemsRemaining = results[0].stockQuantity - answer.quantity;
                var purchaseTotal = answer.quantity * results[0].price;
                connection.query(`UPDATE products SET stockQuantity=${itemsRemaining} WHERE id=${answer.itemID}`,
                    function (err, results) {
                        if (err) throw err;
                        console.log(`Your total is: ${purchaseTotal}`);
                        continueShopping();
                        // return results; // <--- i dont think this is working or doing anything
                    });
            } else {
                console.log("Unfortunatly at this time we are out of stock for the item you requested. Please check back later or contact our sales department to find out when the item will be back in stock.");
                continueShopping();
            }
        });
    });
}

function continueShopping() {
    inquirer.prompt([{
        name: "tryAgain",
        type: "confirm",
        message: "Would you like to continue ordering? "
    }]).then(function (answer) {
        if (answer.tryAgain) {
            availableProducts();
        } else {
            connection.query("SELECT * FROM products", function (err, results) {
                if (err) throw err;
                console.table(results);
            });
            console.log("Your session has ended.  Thank you for shopping Bike Shop");
        }
    });
}
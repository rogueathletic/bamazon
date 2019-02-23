/* <----- NODE.js     J.SCHUTZ */
/* <----- NODE.js packets We are requiring into the app J.SCHUTZ */
const mysql = require('mysql'); 
const inquirer = require('inquirer');
require('console.table');
var keys = require("./keys");
/* <----- NODE.js   all the nessisary log in info to log this program into MYSQL  J.SCHUTZ */
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hMw8EgmunkRDyTFMMb7]f96Nkei6Fsx",
    database: "bamazon"
});
/* <----- NODE.js  initial error notification script. this is global, there are others that are function specific   J.SCHUTZ */
connection.connect(function (err) {
    if (err) throw err;
    availableProducts();
});
/* <----- NODE.js   this is the script that brings in the comma seperated value list from another source outside of this specific file  J.SCHUTZ */
function availableProducts() {
    console.log("\nBike Shop Merchandise: \n");
    connection.query("SELECT id, productName, price FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
        startShopping();
    });
}
/* <------ the initial interactions between the consumer and the database. the questions responses will yeild a unique response for different info added */
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
                    });
            } else {
                console.log("Unfortunatly at this time we are out of stock for the item you requested. Please check back later or contact our sales department to find out when the item will be back in stock.");
                continueShopping();
            }
        });
    });
}
/* <----- NODE.js   As you have moved through the stores function you are returned the option to continue shopping or exit the app/store  J.SCHUTZ */
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
/* -----> ***** Many of the console.log files were formatted using ES6. This process used console.log just as it is in es5 but once within the parenthesies you will use backtick to contain all contents in the parenthesies where once you have completed your message copy you then use = and then you use $ with no space between the two symbols. Then you will want to use the curly brackets again with no symbols or spaces after the dollar sign. Inside the curly brackets is where the contents that need to be called should be placed. Once this info has been added you will close the console log with a ; at thee end as you normally would. Then move to the next line and continue your code.  ***** <----- J.SCHUTZ */
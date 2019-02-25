
<p align="center">
<img src="https://i.imgur.com/vVwCra2.png" alt="Trulli" width="50%" height="auto" margin-left="20%">
</p>

<br><br><br>

Utilizing a multitude of functions, formulas and coding languages, the project here was to create a fully functional and usable storefront form
MySQL information to create DB and Table

```DROP DATABASE IF EXISTS bamazon;```

replaces file in mysql if it was present. if it was not dropped it will be used to create it

```CREATE DATABASE bamazon;```

declares we want to use this file to populate the file declared aboves content


```USE bamazon;```

this is the master list of column titles and how they require their own specific formatting

```CREATE TABLE Products (
    id INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR (45) NOT NULL,
    departmentName VARCHAR (45) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stockQuantity INT (10) NOT NULL,
    PRIMARY KEY (ID)
);
```

varchar characters and numbers as a word
int is intiger or number vlaue 
not null means it can not be empty
the numbers in parentheses is the most amount of characters that can be entered for the column value

Below you will see the info assigned to their corresponding table headers via .csv formatting
```INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('001', 'Bianchi Specialisima', 'Bikes', 4999.00, 5);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('002', 'Kask Protone` | White', 'Helmet', 375.00, 8);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('003', 'Fizik', 'Socks', 20.00, 6);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('004', 'Assos', 'Apparel', 360.00, 10);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('005', 'bibs', 'Apparel', 532.26, 6);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('006', 'Mavic Vest', 'Accessories', 135.00, 10);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('007', 'Bont Vaypor + White', 'Shoes', 710.00, 7);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('008', 'Oakley Radar EV', 'Apparel', 225.00, 14);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('009', 'WYN Sleeves ', 'Apparel', 120.00, 10);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('010', 'Giro Gloves', 'Accessories', 25.00, 12);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('011', 'Beats By Dre Headphones', 'Shoes', 130.00, 18);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('012', 'Speed Sleeve', 'Apparel', 100.00, 15);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('013', 'SRM PC8', 'Apparel', 120.00, 12);
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
VALUES ('014', 'Specialized 1.5 knee warmers', 'Accessories', 20.00, 12);
```


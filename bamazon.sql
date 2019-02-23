-- MySQL information to create DB and Table
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Products (
    id INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR (45) NOT NULL,
    departmentName VARCHAR (45) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stockQuantity INT (10) NOT NULL,
    PRIMARY KEY (ID)
);

-- Data used to populate tables
INSERT INTO Products (ID, productName, departmentName, price, stockQuantity)
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


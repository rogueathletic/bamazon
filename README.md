
<p align="center">
<img src="https://i.imgur.com/vVwCra2.png" alt="Trulli" width="50%" height="auto" margin-left="20%">
</p>

<br><br><br>

Utilizing a multitude of functions, formulas and coding languages, the project here was to create a fully functional and usable storefront form thats functionality is to be executed within terminal. 

##Programs/node apps used to complete this application
>My SQL Workbench
>HTML
>CSS
>Javascript
>Jquery
>Node
    >dotenv
    >Json
    >ansi-escapes
    >ansi-regex
    >ansi-styles
    >bignumber.js
    >chardet
    >cli-cursor
    >clone
    >color-convert
    >color-name
    >console.table
    >core-util-is
    >defaults
    >easy-table
    >escape-string-regexp
    >external-editor
    >figures
    >has-flag
    >iconv-lite
    >inherits
    >inquire 
    >is-fullwidth-code-point
    >is-promise
    >isarray
    >lodash
    >mimic-fn
    >mute-stream
    >mysql
    >onetime
    >os-tmpdir
    >process-nextick-args
    >readable-stream
    >restore-cursor
    >run-async
    >rxjs
    >safe-buffer
    >signal-exit
    >sqlstring
    >string-width
    >string_decoder
    >strip-ansi
    >supports-color
    >symbol-observable
    >through
    >util-deprecate
    >wcwidth
    
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

Below you will see the info assigned to the corresponding table headers via .csv formatting. This for most users will emulate the funcitons of Microsoft Excell or more appropriatly Microsoft Acess. This ebing that Excel is in its root value a table builder where access much like My Sql is a platform you can view, review and build tables but its true function is extrapulating data from the sheet and making functional charts and forms out of the information provided. to provide a refference of the code below, I have added a tabled form after it to show the symilarities of the two files in how they look.

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
Where the code above is formatted in a way for e to bulk upload. The table below is an end users outout
<table>
<tbody>
<tr>
<td style="text-align: center;">ID</td>
<td style="text-align: center;">Product Name</td>
<td style="text-align: center;">departmentName</td>
<td style="text-align: center;">price</td>
<td style="text-align: center;">stockQuantity</td>
</tr>
<tr>
<td style="text-align: center;">001</td>
<td style="text-align: right;">Bianchi Specialisima</td>
<td style="text-align: center;">Bikes</td>
<td style="text-align: center;">4999.00</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td style="text-align: center;">002</td>
<td style="text-align: right;">Kask Protone | White</td>
<td style="text-align: center;">Helmets</td>
<td style="text-align: center;">375.00</td>
<td style="text-align: center;">8</td>
</tr>
<tr>
<td style="text-align: center;">003</td>
<td style="text-align: right;">Fizik Arione</td>
<td style="text-align: center;">Saddles</td>
<td style="text-align: center;">20.00</td>
<td style="text-align: center;">6</td>
</tr>
<tr>
<td style="text-align: center;">004</td>
<td style="text-align: right;">Assos</td>
<td style="text-align: center;">Apparel</td>
<td style="text-align: center;">360.00</td>
<td style="text-align: center;">10</td>
</tr>
<tr>
<td style="text-align: center;">005</td>
<td style="text-align: right;">WYN bibs</td>
<td style="text-align: center;">Apparel</td>
<td style="text-align: center;">532.26</td>
<td style="text-align: center;">6</td>
</tr>
<tr>
<td style="text-align: center;">006</td>
<td style="text-align: right;">Mavic Vest</td>
<td style="text-align: center;">Accessories</td>
<td style="text-align: center;">135.00</td>
<td style="text-align: center;">10</td>
</tr>
<tr>
<td style="text-align: center;">007</td>
<td style="text-align: right;">Bont Vaypor +</td>
<td style="text-align: center;">shoes</td>
<td style="text-align: center;">710.00</td>
<td style="text-align: center;">7</td>
</tr>
<tr>
<td style="text-align: center;">008</td>
<td style="text-align: right;">Oakley Radar EV</td>
<td style="text-align: center;">Apparel</td>
<td style="text-align: center;">225.00</td>
<td style="text-align: center;">14</td>
</tr>
<tr>
<td style="text-align: center;">009</td>
<td style="text-align: right;">WYN Sleeves</td>
<td style="text-align: center;">Apparel</td>
<td style="text-align: center;">120.00</td>
<td style="text-align: center;">10</td>
</tr>
<tr>
<td style="text-align: center;">010</td>
<td style="text-align: right;">Giro Gloves</td>
<td style="text-align: center;">Accessories</td>
<td style="text-align: center;">25.00</td>
<td style="text-align: center;">12</td>
</tr>
<tr>
<td style="text-align: center;">011</td>
<td style="text-align: right;">Beats by Dre Headphones</td>
<td style="text-align: center;">Shoes</td>
<td style="text-align: center;">130.00</td>
<td style="text-align: center;">18</td>
</tr>
<tr>
<td style="text-align: center;">012</td>
<td style="text-align: right;">Speed Sleeve</td>
<td style="text-align: center;">Apparel</td>
<td style="text-align: center;">100.00</td>
<td style="text-align: center;">15</td>
</tr>
<tr>
<td style="text-align: center;">013</td>
<td style="text-align: right;">SRM PC8</td>
<td style="text-align: center;">Apparel</td>
<td style="text-align: center;">120.0.</td>
<td style="text-align: center;">12</td>
</tr>
<tr>
<td style="text-align: center;">014</td>
<td style="text-align: right;">SpeacializedKnee Warmers 1.5</td>
<td style="text-align: center;">Accessories</td>
<td style="text-align: center;">20.00</td>
<td style="text-align: center;">12</td>
</tr>
</tbody>
</table>
<hr>
<hr>


<p align="center">
<img src="https://i.imgur.com/vVwCra2.png" alt="Trulli" width="50%" height="auto" margin-left="20%">
</p>

<br><br><br>

Utilizing a multitude of functions, formulas and coding languages, the project here was to create a fully functional and usable storefront form thats functionality is to be executed within terminal. 
<hr>
<h1>Programs/<a href="https://bit.ly/2U4VW2o">node apps</a>/node dependancies used to complete this application</h1>
<br>
<ul>
<li><a href="https://bit.ly/2GZTqXu">My SQL Workbench</a></li>
<li><a href="https://bit.ly/2EcEJNN">HTML</a></li>
<li><a href="https://bit.ly/2TcFS1k">CSS</a></li>
<li><a href="https://bit.ly/1cYzv8q">Javascript</a></li>
<li><a href="https://bit.ly/1AOYl0q">Jquery</a></li>
<li><a href="https://bit.ly/2wztb2m">bootstrap</a></li>
<ul>
    <li><a href="https://bit.ly/1LjG5AH">Node</a></li>
    <ul>
        <li><a href="https://bit.ly/2ssAXN3">dotenv</a></li>
        <li><a href="https://bit.ly/2kh3jU4">Json</a></li>
        <li><a href="https://bit.ly/2H3dWq7">ansi-escapes</a></li>
        <li><a href="https://bit.ly/2GJET30">ansi-regex</a></li>
        <li><a href="https://bit.ly/2Ev2ems">ansi-styles</a></li>
        <li><a href="https://bit.ly/2IyieIk">bignumber.js</a></li>
        <li><a href="https://bit.ly/2NraruV">chardet</a></li>
        <li><a href="https://bit.ly/2SpCV98">cli-cursor</a></li>
        <li><a href="https://bit.ly/2EwfNSH">clone</a></li>
        <li><a href="https://bit.ly/2tFvRuZ">color-convert</a></li>
        <li><a href="https://bit.ly/2GHwRaO">color-name</a></li>
        <li><a href="https://bit.ly/2U7GNx8">console.table</a></li>
        <li><a href="https://bit.ly/2tyxECc">core-util-is</a></li>
        <li><a href="https://bit.ly/2Vcsjfu">defaults</a></li>
        <li><a href="https://bit.ly/2XlNiyE">easy-table</a></li>
        <li><a href="https://bit.ly/2IBU67P">escape-string-regexp</a></li>
        <li><a href="https://bit.ly/2VjQKIe">external-editor</a></li>
        <li><a href="https://bit.ly/2NpF97G">figures</a></li>
        <li><a href="https://bit.ly/2SkXnIg">has-flag</a></li>
        <li><a href="https://bit.ly/2Ns8L49">iconv-lite</a></li>
        <li><a href="https://bit.ly/2Iym7wU">inherits</a></li>
        <li><a href="https://bit.ly/2BQXbLz">inquire</a></li>
        <li><a href="https://bit.ly/2XlFxZr">is-fullwidth-code-point</a></li>
        <li><a href="https://bit.ly/2Easbq2">is-promise</a></li>
        <li><a href="https://bit.ly/2Tdx4In">isarray</a></li>
        <li><a href="https://bit.ly/2SUKTfH">lodash</a></li>
        <li><a href="https://bit.ly/2H0Qee3">mimic-fn</a></li>
        <li><a href="https://bit.ly/2VjR5uu">mute-stream</a></li>
        <li><a href="https://bit.ly/2yMBvfz">mysql</a></li>
        <li><a href="https://bit.ly/2NphKDc">onetime</a></li>
        <li><a href="https://bit.ly/2GHkw6f">os-tmpdir</a></li> *os-tmpdir has been depriciated but it still listed as a packet dependancy so it has been included
        <li><a href="https://bit.ly/2NpMfZM">process-nextick-args</a></li>
        <li><a href="https://bit.ly/2VkiXia">readable-stream</a></li>
        <li><a href="https://bit.ly/2GHsTyJ">restore-cursor</a></li>
        <li><a href="https://bit.ly/2Iyoyzy">run-async</a></li>
        <li><a href="https://bit.ly/2IvRatd">rxjs</a></li>
        <li><a href="http://bit.ly/safe-buf">safe-buffer</a></li>
        <li><a href="http://bit.ly/2EtRlkK">signal-exit</a></li>
        <li><a href="http://bit.ly/2XipSu1">sqlstring</a></li>
        <li><a href="http://bit.ly/2NtvrAZ">string-width</a></li>
        <li><a href="http://bit.ly/2H0r1Az">string_decoder</a></li>
        <li><a href="http://bit.ly/2EuZt4z">strip-ansi</a></li>
        <li><a href="http://bit.ly/2ViR364">supports-color</a></li>
        <li><a href="http://bit.ly/2NsmWGm">symbol-observable</a></li>
        <li><a href="http://bit.ly/2tBY8mo">through</a></li>
        <li><a href="http://bit.ly/2tALS5B">util-deprecate</a></li>
        <li><a href="http://bit.ly/2NrS4pE">wcwidth</a></li>
    </ul>
</ul>
</ul>
<hr>
<br>    
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

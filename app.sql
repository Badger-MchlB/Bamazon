DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Romaine Lettuce','vegetables',3.29, 100),
('Red Onions','vegetables',0.87,100),
('Granny Smith Apples','fruits',0.66,100),
('Dry Yeast','baking supplies',3.99,100),
('Chicken Breasts','poultry',4.99, 100),
('Pork Ribs','meat',4.99,100),
('Brioche','Bread',3.99,100),
('Paper','Office supplies',1.99,100),
('Worms','Bait and tackle',3.29, 100),
('Plunger','Bathroom tools',4.99,100);

--create the burgers_db
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
--switch to/use burgers_db

USE burgers_db;

--burgers table
CREATE TABLE burgers(
----id: an auto incrementing int that serves as the primary key
    id INTEGER AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
----burger_name: a string
    burger_name VARCHAR(100),
----devoured: boolean
    devoured BOOLEAN NOT NULL
);
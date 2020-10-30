// Import MySQL connection.
var connection = require("../config/connection.js");

//create the methods that will execute the necessary mySQL commands in the controllers. these are the methods you will need to use in order to retrieve and store data inyour database.
var orm = {
    //-selectAll()
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
    //-insertOne()
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
    //-updateOne()
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
        });
    }
};

//export the ORM object in module.exports
module.exports = orm;
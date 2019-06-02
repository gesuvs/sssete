'use strict';
var config = require("./config").database;
var isNull = require('./script').isNull;

module.exports = {
	'query': function(queryString) {
        if (isNull(queryString)) {
            return null;
        } else {
            var sql = require('mssql');
            sql.close();
        	return new Promise((resolve, reject) => {
                console.log('Establishing connection to Database...')
                sql.connect(config).then(pool => {
                    console.log('Connected to SevenSoft Database!');
                    return pool.request().query(queryString);
                }).then(results => {
                    console.log('Query succeded!');
                    console.log('Closing connection...');
                    sql.close();
                    resolve(results);
                }).catch(error => {
                    console.log('Error executing query :(', error);
                    console.log('Closing connection...');
                    sql.close();
                    reject(error);
                });
            });
        }
    }
};

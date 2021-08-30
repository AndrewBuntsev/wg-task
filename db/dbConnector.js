const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool(
    {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
);

const query = util.promisify(pool.query).bind(pool);

exports.products = require('./entities/products');
exports.attributeTypes = require('./entities/attributeTypes');
exports.attributes = require('./entities/attributes');


exports.dbCall = async (func, options) => {
    const callResult = await func(query, options);
    return callResult;
};

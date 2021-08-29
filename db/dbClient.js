const dbConnector = require('./dbConnector');
const { dbCall, products, attributeTypes, attributes } = dbConnector;


exports.getProducts = async options => await dbCall(products.getProducts, options);
exports.addProduct = async options => await dbCall(products.addProduct, options);

exports.getAttributes = async options => await dbCall(attributes.getAttributes, options);
exports.getAttributeTypes = async options => await dbCall(attributeTypes.getTypes, options);

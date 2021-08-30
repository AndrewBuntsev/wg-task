const dbClient = require('./../db/dbClient');
const products = require('./mockData');


// fill DB with the data
(async () => {
    for (let product of products){
        const { id, sku, name, price, attribute } = product;
        await dbClient.addProduct({
            id,
            sku,
            name, 
            price,
            attributes: attribute
        })
    }
})();

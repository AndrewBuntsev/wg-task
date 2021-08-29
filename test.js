const dbClient = require('./db/dbClient');




// fill DB with the data
(async () => {
    const products = await dbClient.getProducts({});
    console.log('products = ', products);
})();

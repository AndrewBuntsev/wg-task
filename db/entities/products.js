//const { escapeCommas, deleteCommas } = require('../../../helpers/textHelper');

//const PAGE_SIZE = 26;

exports.getProducts = async (query, options) => {
    const { minPrice, maxPrice, fantastic, minRating, maxRating } = options;

    let whereClause = '';
    // if (id) {
    //     whereClause += `where t.id = ${id}`;
    // } else if (author) {
    //     whereClause += `where t.userId = ${author}`;
    // } else if (likedBy) {
    //     whereClause += `where exists(select 1 from users u1 where u1.id = ${likedBy} and u1.likedTils like concat('%,', t.id, ',%'))`;
    // } else if (date) {
    //     whereClause += `where date_format(timestamp, '%M %d, %Y') = '${date}'`;
    // } else if (tag) {
    //     whereClause += `where tag = '${tag}'`;
    // } else if (searchTerm) {
    //     whereClause += `where text like '%${searchTerm}%'`;
    // }

    const finalQuery = `SELECT p.* 
            FROM products p
            ${whereClause} 
            order by id`;

    console.log(finalQuery);

    return await query(finalQuery);
};

exports.addProduct = async (query, options) => {
    const { id, sku, name, price, attributes } = options;

    // insert products
    await query(`INSERT INTO products (id, sku, name, price) 
                    VALUES (${id}, '${sku}', '${name}', ${price});`);

    // insert attributes       
    for (let attribute of Object.values(attributes)){
        const { name, value } = attribute;
        await query(`INSERT INTO product_attributes (productId, attributeName, value) 
                    VALUES (${id}, '${name}', '${value}');`);
    }             
};

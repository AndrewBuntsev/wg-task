// retrieves products from the DB applying filters
exports.getProducts = async (query, options) => {
    const { minPrice, maxPrice, fantastic, minRating, maxRating } = options;

    let whereClause = 'where 1 = 1';
    let havingClause = 'having 1 = 1';

    if (minPrice) {
        const minPriceParsed = parseFloat(minPrice);
        if (!Number.isNaN(minPriceParsed)) {
            whereClause += ` and p.price >= ${minPriceParsed}`;
        }
    }

    if (maxPrice) {
        const maxPriceParsed = parseFloat(maxPrice);
        if (!Number.isNaN(maxPriceParsed)) {
            whereClause += ` and p.price <= ${maxPriceParsed}`;
        }
    }
    
    if (fantastic) {
        havingClause += ` and attribute->>"$.fantastic" = '${fantastic}'`;
    }

    if (minRating) {
        const minRatingParsed = parseFloat(minRating);
        if (!Number.isNaN(minRatingParsed)) {
            havingClause += ` and CAST(attribute->>"$.rating" AS DECIMAL(10,2)) >= ${minRatingParsed}`;
        }
    }

    if (maxRating) {
        const maxRatingParsed = parseFloat(maxRating);
        if (!Number.isNaN(maxRatingParsed)) {
            havingClause += ` and CAST(attribute->>"$.rating" AS DECIMAL(10,2)) <= ${maxRatingParsed}`;
        }
    }

    const finalQuery = `SELECT p.*, JSON_OBJECTAGG(pa.attributeName, pa.value) as attribute
            FROM products p
            inner join product_attributes pa on pa.productId = p.id
            ${whereClause} 
            group by p.id, p.sku, p.name, p.price
            ${havingClause} 
            order by id`;

    console.log(finalQuery);

    return await query(finalQuery);
};

// inserts new product
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

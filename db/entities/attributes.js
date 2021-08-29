exports.getAttributes = async (query, options) => {
    return query('SELECT a.* FROM attributes a;');
};

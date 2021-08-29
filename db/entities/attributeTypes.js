exports.getTypes = async (query, options) => {
    return await query('SELECT t.* FROM types t');
};

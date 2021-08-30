
const fetch = require('node-fetch');
const URL = 'https://n3n9dzi5ig.execute-api.ap-southeast-2.amazonaws.com/dev/products';


describe('Retrieve all records', () => {
    it('Should have 1000 rows', () => {
        fetch(`${URL}`)
            .then(response => response.json())
            .then(data => {
                expect(data.length).toEqual(1000);
            });
    });
});


exports.URL = URL;

const fetch = require('node-fetch');
const { URL } = require('./allRecords.test');


describe('Test price criteria', () => {
    it('Get results with minPrice', () => {
        fetch(`${URL}?minPrice=998`)
            .then(response => response.json())
            .then(data => {
                expect(data).toEqual([
                    {
                      "id": 174,
                      "sku": "300-71-1960",
                      "name": "SertralineHydrochloride",
                      "price": 998.26,
                      "attribute": {
                        "rating": {
                          "value": "2.8",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "true",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    },
                    {
                      "id": 242,
                      "sku": "523-61-0509",
                      "name": "Lamotrigine",
                      "price": 998.15,
                      "attribute": {
                        "rating": {
                          "value": "4.7",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "true",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    },
                    {
                      "id": 313,
                      "sku": "948-96-8701",
                      "name": "VALPROICACID",
                      "price": 998.52,
                      "attribute": {
                        "rating": {
                          "value": "2.4",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "true",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    }
                  ]);
            });
    });

    it('Get results with minPrice & maxPrice', () => {
        fetch(`${URL}?minPrice=998&maxPrice=998.5`)
            .then(response => response.json())
            .then(data => {
                expect(data).toEqual([
                    {
                      "id": 174,
                      "sku": "300-71-1960",
                      "name": "SertralineHydrochloride",
                      "price": 998.26,
                      "attribute": {
                        "rating": {
                          "value": "2.8",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "true",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    },
                    {
                      "id": 242,
                      "sku": "523-61-0509",
                      "name": "Lamotrigine",
                      "price": 998.15,
                      "attribute": {
                        "rating": {
                          "value": "4.7",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "true",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    }
                  ]);
            });
    });

    it('Get results with maxPrice', () => {
        fetch(`${URL}?maxPrice=102`)
            .then(response => response.json())
            .then(data => {
                expect(data).toEqual([
                    {
                      "id": 620,
                      "sku": "387-48-4457",
                      "name": "CLINDAMYCINPHOSPHATE",
                      "price": 101.72,
                      "attribute": {
                        "rating": {
                          "value": "3.4",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "false",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    },
                    {
                      "id": 891,
                      "sku": "639-17-5807",
                      "name": "ETHYLALCOHOL",
                      "price": 101.62,
                      "attribute": {
                        "rating": {
                          "value": "3.1",
                          "type": 2,
                          "name": "rating"
                        },
                        "fantastic": {
                          "value": "true",
                          "type": 1,
                          "name": "fantastic"
                        }
                      }
                    }
                  ]);
            });
    });
});


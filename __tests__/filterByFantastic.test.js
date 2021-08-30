
const fetch = require('node-fetch');
const { URL } = require('./allRecords.test');


describe('Test fantastic criteria', () => {
    const falseFantastic = [
        {
            "id": 156,
            "sku": "411-97-9125",
            "name": "Cilostazol",
            "price": 906.94,
            "attribute": {
                "rating": {
                    "value": "4.3",
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
            "id": 220,
            "sku": "578-23-4885",
            "name": "amiloride hydrochloride andhydrochlorothiazide",
            "price": 931.46,
            "attribute": {
                "rating": {
                    "value": "4.5",
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
            "id": 241,
            "sku": "466-77-8871",
            "name": "NicotinePolacrilex",
            "price": 939.97,
            "attribute": {
                "rating": {
                    "value": "4.6",
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
    ];

    const trueFantastic = [
        {
            "id": 43,
            "sku": "160-13-8704",
            "name": "Hydrocortisone",
            "price": 908.61,
            "attribute": {
                "rating": {
                    "value": "4.2",
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
            "id": 62,
            "sku": "110-12-9785",
            "name": "NIACIN",
            "price": 905.23,
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
            "id": 72,
            "sku": "353-59-7708",
            "name": "Dextromethorphan Hydrobromide andPhenylephrine Hydrochloride",
            "price": 924.63,
            "attribute": {
                "rating": {
                    "value": "4.4",
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
            "id": 380,
            "sku": "281-31-6392",
            "name": "Voriconazole",
            "price": 918.62,
            "attribute": {
                "rating": {
                    "value": "4.3",
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
            "id": 430,
            "sku": "977-03-5042",
            "name": "Plantain Beeswax CoughRelief",
            "price": 934.94,
            "attribute": {
                "rating": {
                    "value": "4.5",
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
            "id": 669,
            "sku": "259-84-5314",
            "name": "KETOROLACTROMETHAMINE",
            "price": 912.86,
            "attribute": {
                "rating": {
                    "value": "4.4",
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
            "id": 922,
            "sku": "535-50-9140",
            "name": "TrazodoneHydrochloride",
            "price": 917.71,
            "attribute": {
                "rating": {
                    "value": "4.1",
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
            "id": 981,
            "sku": "390-89-0353",
            "name": "OFLOXACIN",
            "price": 923.17,
            "attribute": {
                "rating": {
                    "value": "4.2",
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
    ];

    it('Get results without fantastic attribute', () => {
        fetch(`${URL}?minPrice=900&maxPrice=950&minRating=4.1&maxRating=4.7`)
            .then(response => response.json())
            .then(data => {
                expect(data.length).toEqual(11);
                expect(data).toEqual([...falseFantastic, ...trueFantastic].sort((a, b) => a.id - b.id));
            });
    });

    it('Get results with fantastic = false', () => {
        fetch(`${URL}?minPrice=900&maxPrice=950&fantastic=false&minRating=4.1&maxRating=4.7`)
            .then(response => response.json())
            .then(data => {
                expect(data.length).toEqual(3);
                expect(data).toEqual(falseFantastic.sort((a, b) => a.id - b.id));
            });
    });

    it('Get results with fantastic = true', () => {
        fetch(`${URL}?minPrice=900&maxPrice=950&fantastic=true&minRating=4.1&maxRating=4.7`)
            .then(response => response.json())
            .then(data => {
                expect(data.length).toEqual(8);
                expect(data).toEqual(trueFantastic.sort((a, b) => a.id - b.id));
            });
    });
});


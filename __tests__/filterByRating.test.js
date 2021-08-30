
const fetch = require('node-fetch');
const { URL } = require('./allRecords.test');


describe('Test rating criteria', () => {
    it('Get results with minRating', () => {
        fetch(`${URL}?minRating=5`)
            .then(response => response.json())
            .then(data => {
                expect(data).toEqual([
                  {
                    "id": 67,
                    "sku": "308-70-9014",
                    "name": "Metoclopramide",
                    "price": 982.84,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 90,
                    "sku": "803-55-4158",
                    "name": "Acetaminophen",
                    "price": 990.78,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 277,
                    "sku": "533-62-0152",
                    "name": "Estazolam",
                    "price": 485.58,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 289,
                    "sku": "631-43-3751",
                    "name": "Acetaminophen, DextromethorphanHBr, Doxylamine succinate",
                    "price": 526.37,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 291,
                    "sku": "511-87-5463",
                    "name": "Ensulizole, Octinoxate, andOxybenzone",
                    "price": 480.17,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 305,
                    "sku": "110-77-4764",
                    "name": "OCTINOXATE, TITANIUMDIOXIDE",
                    "price": 901.04,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 350,
                    "sku": "532-01-1218",
                    "name": "oxymorphonehydrochloride",
                    "price": 726.64,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 375,
                    "sku": "505-03-9064",
                    "name": "Geotrichumcandidum",
                    "price": 464.04,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 426,
                    "sku": "934-59-8310",
                    "name": "Rifampin",
                    "price": 496.56,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 527,
                    "sku": "667-70-6770",
                    "name": "montelukastsodium",
                    "price": 233.45,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 875,
                    "sku": "768-00-1176",
                    "name": "SODIUMBICARBONATE",
                    "price": 359.06,
                    "attribute": {
                      "rating": {
                        "value": "5",
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
                    "id": 885,
                    "sku": "724-11-2709",
                    "name": "Tretinoin",
                    "price": 656.35,
                    "attribute": {
                      "rating": {
                        "value": "5",
                        "type": 2,
                        "name": "rating"
                      },
                      "fantastic": {
                        "value": "false",
                        "type": 1,
                        "name": "fantastic"
                      }
                    }
                  }
                ]);
            });
    });

    it('Get results with minRating & maxRating', () => {
        fetch(`${URL}?minRating=1&maxRating=1`)
            .then(response => response.json())
            .then(data => {
                expect(data).toEqual([
                  {
                    "id": 38,
                    "sku": "530-91-0035",
                    "name": "Nitrogen",
                    "price": 708.57,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 79,
                    "sku": "749-74-2571",
                    "name": "AsenapineMaleate",
                    "price": 282.64,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 258,
                    "sku": "800-73-3357",
                    "name": "Hydrocortisone",
                    "price": 272.9,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 342,
                    "sku": "765-31-3205",
                    "name": "TitaniumDioxide",
                    "price": 939.58,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 775,
                    "sku": "239-43-7838",
                    "name": "Bismuth subcitrate potassium,Metronidazole, Tetracycline hydrochloride (140 mg/125 mg/125mg)",
                    "price": 906.32,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 854,
                    "sku": "832-48-7807",
                    "name": "Cyclosporine",
                    "price": 983.03,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 947,
                    "sku": "104-22-3090",
                    "name": "Quetiapinefumarate",
                    "price": 198.59,
                    "attribute": {
                      "rating": {
                        "value": "1",
                        "type": 2,
                        "name": "rating"
                      },
                      "fantastic": {
                        "value": "false",
                        "type": 1,
                        "name": "fantastic"
                      }
                    }
                  }
                ]);
            });
    });

    it('Get results with maxRating', () => {
        fetch(`${URL}?maxRating=1.1`)
            .then(response => response.json())
            .then(data => {
                expect(data).toEqual([
                  {
                    "id": 32,
                    "sku": "887-44-6199",
                    "name": "NaproxenSodium",
                    "price": 968.46,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 38,
                    "sku": "530-91-0035",
                    "name": "Nitrogen",
                    "price": 708.57,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 66,
                    "sku": "817-68-4621",
                    "name": "MethylphenidateHydrochloride",
                    "price": 503.14,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 79,
                    "sku": "749-74-2571",
                    "name": "AsenapineMaleate",
                    "price": 282.64,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 96,
                    "sku": "525-33-1526",
                    "name": "GABAPENTIN",
                    "price": 470.16,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 152,
                    "sku": "371-75-6649",
                    "name": "CetirizineHCl",
                    "price": 913.67,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 258,
                    "sku": "800-73-3357",
                    "name": "Hydrocortisone",
                    "price": 272.9,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 300,
                    "sku": "834-85-9671",
                    "name": "OXYGEN",
                    "price": 955.95,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 304,
                    "sku": "953-23-2666",
                    "name": "Cephalexin",
                    "price": 344.12,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 338,
                    "sku": "715-22-7129",
                    "name": "Acetaminophen, DiphenhydramineHCl",
                    "price": 598.3,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 342,
                    "sku": "765-31-3205",
                    "name": "TitaniumDioxide",
                    "price": 939.58,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 374,
                    "sku": "131-31-4438",
                    "name": "OxycodoneHydrochloride",
                    "price": 955.95,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 432,
                    "sku": "252-42-7606",
                    "name": "estradiol",
                    "price": 306.74,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 456,
                    "sku": "477-68-7352",
                    "name": "Aspirin",
                    "price": 735.92,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 473,
                    "sku": "645-68-5172",
                    "name": "EthylAlcohol",
                    "price": 504.7,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 480,
                    "sku": "169-80-1856",
                    "name": "Metoprolol Tartrate andHydrochlorothiazide",
                    "price": 281.59,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 488,
                    "sku": "823-55-5011",
                    "name": "LiothyronineSodium",
                    "price": 886.94,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 581,
                    "sku": "483-81-1955",
                    "name": "Propranolol",
                    "price": 808.44,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 632,
                    "sku": "457-77-7412",
                    "name": "SodiumFluoride",
                    "price": 330.87,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 672,
                    "sku": "139-83-4273",
                    "name": "PantoprazoleSodium",
                    "price": 799.57,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 685,
                    "sku": "235-91-9420",
                    "name": "ezetimibe andsimvastatin",
                    "price": 701.88,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 748,
                    "sku": "315-04-9148",
                    "name": "Ibuprofen",
                    "price": 324.53,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 759,
                    "sku": "747-57-1703",
                    "name": "Avobenzone, Homosalate,Octinoxate, Octocrylene",
                    "price": 441.66,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 775,
                    "sku": "239-43-7838",
                    "name": "Bismuth subcitrate potassium,Metronidazole, Tetracycline hydrochloride (140 mg/125 mg/125mg)",
                    "price": 906.32,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 831,
                    "sku": "934-07-3861",
                    "name": "Dextroamphetamine Saccharate,Amphetamine Aspartate Monohydrate, Dextroamphetamine Sulfate andAmphetamine Sulfate",
                    "price": 907.88,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
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
                    "id": 854,
                    "sku": "832-48-7807",
                    "name": "Cyclosporine",
                    "price": 983.03,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 947,
                    "sku": "104-22-3090",
                    "name": "Quetiapinefumarate",
                    "price": 198.59,
                    "attribute": {
                      "rating": {
                        "value": "1",
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
                    "id": 989,
                    "sku": "424-46-2235",
                    "name": "Bryonia, Ruta graveolens, Bellisperennis, Argentum metallicum,",
                    "price": 711.62,
                    "attribute": {
                      "rating": {
                        "value": "1.1",
                        "type": 2,
                        "name": "rating"
                      },
                      "fantastic": {
                        "value": "false",
                        "type": 1,
                        "name": "fantastic"
                      }
                    }
                  }
                ]);
            });
    });
});


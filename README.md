#General

The API has been deployed to AWS as Lambda function exposed via API Gateway
The endpoint:  https://n3n9dzi5ig.execute-api.ap-southeast-2.amazonaws.com/dev/products
The endpoint with query parameters: https://n3n9dzi5ig.execute-api.ap-southeast-2.amazonaws.com/dev/products?minPrice=900&maxPrice=950&fantastic=false&minRating=4.1&maxRating=4.7


#The project architecture

- initDB folder contains SQL & JS scripts used to create DB schema and populate the DB with data from provided mockData
- db folder contains DB access layer scripts
- lambda folder contains the lambda function(s) code
- utils folder contains various utils (not many so far)
- docs folder contains DB schema description
- __tests__ folder contains API tests


#Tech stack used

RDS MySQL as database, connection details will be provided separately
API Gateway + Lambda, deployed using serverless & webpack
Javascript, Typescript
Jest for testing

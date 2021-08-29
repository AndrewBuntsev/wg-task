import { APIGatewayEvent, Context } from 'aws-lambda';
import { createErrorResponse, HttpResponse } from '../utils/api-gateway-response';
const dbClient = require('../db/dbClient');

export async function getProducts(event: APIGatewayEvent, context: Context) {
    console.log('getProducts function is called with event.queryStringParameters: ', event.queryStringParameters);

    // allow just 'GET' requests
    if (event.httpMethod !== 'GET') {
        return new HttpResponse(405, { message: `Unsupported method "${event.httpMethod}"` })
    };

    const { minPrice, maxPrice, fantastic, minRating, maxRating } = event.queryStringParameters ?? {};
    
    try {
        const productsPromise = dbClient.getProducts({ minPrice, maxPrice, fantastic, minRating, maxRating });
        const allAttributesPromise = dbClient.getAttributes({});
        const promiseResults = await Promise.all([productsPromise, allAttributesPromise]);
        const products: Array<any> = promiseResults[0];
        const allAttributes: Array<any> = promiseResults[1];
        
        // reshape payload to the required format
        products.forEach(product => {
            product.attribute = JSON.parse(product.attribute);
            for (const attributeName of Object.keys(product.attribute)) {
                product.attribute[attributeName] = {
                    value: product.attribute[attributeName],
                    type: allAttributes.find(a => a.name == attributeName).type,
                    name: attributeName
                };
              }
        });

        return new HttpResponse(200, products);
    } catch (err) {
        console.error('error: ', err);
        return createErrorResponse(500, err.message);
    }
}
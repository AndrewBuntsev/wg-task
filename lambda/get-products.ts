import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import { createErrorResponse, HttpResponse } from '../utils/api-gateway-response';


export async function getProducts(event: APIGatewayEvent, context: Context) {
    console.log('getProducts Event: ', JSON.stringify(event));

    
    // allow just 'GET' requests
    if (event.httpMethod !== 'GET') {
        return new HttpResponse(405, { message: `Unsupported method "${event.httpMethod}"` })
    };
  
    
    try {
        // compose mock products
        const products = [
            {
              "id": 2,
              "sku": "370-04-2494",
              "name": "Cocoa butter, Phenylephrine HCl, Shark liver oil",
              "price": 983.7,
              "attribute": {
                "fantastic": {
                  "value": true,
                  "type": 1,
                  "name": "fantastic"
                },
                "rating": {
                  "name": "rating",
                  "type": "2",
                  "value": 2
                }
              }
            },
            {
              "id": 3,
              "sku": "470-21-1561",
              "name": "simvastatin",
              "price": 196.75,
              "attribute": {
                "fantastic": {
                  "value": true,
                  "type": 1,
                  "name": "fantastic"
                },
                "rating": {
                  "name": "rating",
                  "type": "2",
                  "value": 4
                }
              }
            }
          ];

        console.log('products: ', products);

        return new HttpResponse(200, products);
    } catch (err) {
        console.error('error: ', err);
        return createErrorResponse(500, err.message);
    }
}
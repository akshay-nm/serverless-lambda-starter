import middy from '@middy/core' // esm Node v14+

// import some middlewares
import jsonBodyParser from '@middy/http-json-body-parser'
import httpErrorHandler from '@middy/http-error-handler'
// import validator from '@middy/validator'
import cors from '@middy/http-cors'
import createError from 'http-errors'

const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(event),
    }
  } catch (error) {
    console.log('Could not create a response')
    throw createError(500, 'Oops! Something went wrong...')
  }
}

// const inputSchema = {
//   type: 'object',
//   properties: {
//     body: {
//       type: 'object',
//       properties: {
//         email: { type: 'string', format: 'email' },
//         password: { type: 'string', minLength: 3 },
//       },
//       required: ['email', 'password'], // Insert here all required event properties
//     },
//   },
// }

export const handle = middy(handler)
  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
  // .use(validator({ inputSchema })) // validates the input
  .use(httpErrorHandler())
  .use(cors())

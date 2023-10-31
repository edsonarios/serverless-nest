// import serverlessExpress from '@vendia/serverless-express'
import serverlessExpress from 'serverless-http'
import { Callback, Context, Handler } from 'aws-lambda'
import { createApp } from './main'

let server: Handler

async function bootstrap(event?: any): Promise<Handler> {
  const {
    headers: { Host },
    requestContext: { stage },
  } = event
  const nestApp = await createApp(Host, stage)
  await nestApp.init()
  const expressApp = nestApp.getHttpAdapter().getInstance()
  return serverlessExpress(expressApp)
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap(event))

  try {
    const result = await server(event, context, callback)
    if (typeof result === 'object' && 'statusCode' in result) {
      // Set CORS headers
      result.headers = {
        ...result.headers,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': '*',
      }
    }

    return result
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': '*',
      },
      body: JSON.stringify({
        message: 'Internal Server Error',
      }),
    }
  }
}

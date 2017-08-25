export const hello = async (event, context, callback) => {
  const response = new Promise(resolve =>
    resolve({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: `Go Serverless Webpack (Babel) v1.0! Your function executed successfully! ${process
          .env.NODE_ENV} stage!`,
        input: event,
      }),
    })
  );

  callback(null, await response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

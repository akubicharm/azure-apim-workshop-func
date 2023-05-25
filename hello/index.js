module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    auth = context.req.headers.authorization;
    context.log(context.req.headers)

    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const responseMessage = auth
        ? "Authorization: "  + auth
        : "No Authorization header found";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const file = req.body;

    const name = (req.body && req.body.FileName);

    context.log(name);

    context.bindings.outputBlob = file;

    const responseMessage = "File upload to Blob completed!!! " + name;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
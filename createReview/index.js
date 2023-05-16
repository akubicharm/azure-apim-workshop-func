module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const rate = (req.body && req.body.Rate);
    const name = (req.body && req.body.Name);

    context.log(req.body.Name);
    context.log(req.body.Rate);

//    context.bindings.outDoc = req.body;
    context.bindings.outDoc = req.body;

    const responseMessage = "Review Created";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };    
}
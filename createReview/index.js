module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const rate = (req.query.rate || req.body && req.body.rate);
    const name = (req.query.name || req.body && req.body.name);

    context.log(rate);
    context.log(name);

    if (rate == null) {
        context.log("rate is null");
        throw 'rate is null';
    }

    const responseMessage = "Review Created";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };    
}

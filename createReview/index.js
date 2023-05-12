module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const rate = (req.body && req.body.Rate);
    const name = (req.body && req.body.Name);

    context.log(req.body.Name);
    context.log(req.body.Rate);

    context.bindings.outputTable = [];

    context.bindings.outputTable.push({
        PartitionKey: "Review",
        RowKey: name,
        Name: name,
        Rate: rate
    });


    const responseMessage = "Review Created";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };    
}
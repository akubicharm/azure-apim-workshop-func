module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


    reviews = '[{"name": "chocolate", "rate": 5}, {"name": "coffee", "rate": 4}, {"name": "tea", "rate": 3}]'

    const responseMessage = reviews;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

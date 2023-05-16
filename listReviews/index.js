module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


    var documents = context.bindings.inDoc;
    var resMsg = JSON.stringify(documents);
    for (var i = 0; i < documents.length; i++) {
      var document = documents[i];
      // operate on each document
      context.log(document);
    }

    const responseMessage = resMsg;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
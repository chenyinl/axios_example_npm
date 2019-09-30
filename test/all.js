console.log("This is unit test for retry package");
var sqs_to_dlq = require('../index');
sqs_to_dlq.function1("aaa","bbb","ccc");

sqs_to_dlq.retry3(
    'GET',                              // http method
    'https://example.url.com/',         // url
    '{"key1":"valuex","key2":"valuey"}' // payload
);

const axios = require('axios');
module.exports = {
    function1: function(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
    },
    
    retry3: function(
        method,
        url,
        payload

    ){
        const res =  axios.get( url, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 1000
            })
        .then(function(response){
                //console.log(response); // too much data to log
                console.log("success");
        })
        .catch(function(error){
            /* example of handle the error by http code */
            if(error.response.status == 502){
                console.log("The error is bad gataway.");
            }
            /* example of handle the error by error message */
            if(error.message.includes('timeout')){
                console.log('TIMEOUT happened');
            }
        });
    }
}

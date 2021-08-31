require('dotenv').config();
const {cognitoidentityserviceprovider} = require('../../lib/initAWS');

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#signUp-property
const signUp = (email, password) => {
    var params = {
        ClientId: process.env.AWS_COGNITO_CLIENT_ID, /* required */
        Password: password, /* required */
        Username: email, /* required */
        UserAttributes: [
            {
                Name: 'email', /* required */
                Value: email
            },
            /* more items */
        ],
        ValidationData: [
            {
                Name: 'email', /* required */
                Value: email
            },
            /* more items */
        ]
    };
    cognitoidentityserviceprovider.signUp(params, function(err, data) {
        if (err) 
            console.log(err, err.stack); // an error occurred
        else     
            console.log(data); // successful response
    });
}

signUp('atul.thorat@gmail.com', 'Test@123')
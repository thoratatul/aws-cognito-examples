require('dotenv').config();
const {cognitoidentityserviceprovider} = require('./../lib/initAWS');

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#confirmForgotPassword-property
const confirmForgotPassword = (email, password, verificationCode) => {
    const params = {
        ClientId: process.env.AWS_COGNITO_CLIENT_ID, /* required */
        ConfirmationCode: verificationCode, /* required */
        Password: password, /* required */
        Username: email, /* required */
    };
    cognitoidentityserviceprovider.confirmForgotPassword(params, function(err, data) {
        if (err) 
            console.log(err, err.stack); // an error occurred
        console.log(data); // successful response
    });
}

confirmForgotPassword('atul.thorat@blazeclan.com', 'Cognito23@#', '967373')
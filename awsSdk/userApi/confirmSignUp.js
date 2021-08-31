require('dotenv').config();
const {cognitoidentityserviceprovider} = require('../../lib/initAWS');

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#confirmSignUp-property
const confirmSignUp = (email, verificationCode) => {
    const params = {
        ClientId: process.env.AWS_COGNITO_CLIENT_ID,
        ConfirmationCode: verificationCode,
        Username: email
    }

    cognitoidentityserviceprovider.confirmSignUp(params, function(err, data) {
        if (err) 
            console.log(err, err.stack); // an error occurred
        else     
            console.log(data); // successful response
    });
}

confirmSignUp('atul.thorat@blazeclan.com', '154361')
require('dotenv').config();
const {cognitoidentityserviceprovider} = require('../../lib/initAWS');

const parseJwt = (token) => { // Or we can use jwt-decode npm package
    return JSON.parse(Buffer.from(token.split('.')[1].replace('-', '+').replace('_', '/'), 'base64').toString('binary'));
};

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#initiateAuth-property
const signIn = (email, password) => {
    var params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.AWS_COGNITO_CLIENT_ID,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        },
    };
    cognitoidentityserviceprovider.initiateAuth(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            return false
        }

        const response = (data && data.ChallengeName) ? data : {...data, ...{userDetails: parseJwt(data.AuthenticationResult.IdToken)}}
        console.log(response);
        return response;
    });     
}

signIn('atul.thorat@gmail.com', 'Test@123')
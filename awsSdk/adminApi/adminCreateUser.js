require('dotenv').config();
const {cognitoidentityserviceprovider} = require('../../lib/initAWS');

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminCreateUser-property
const adminCreateUser = (email, password) => {
    var params = {
        UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID, /* required */
        TemporaryPassword: password, /* required */
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
        ],
        DesiredDeliveryMediums:['EMAIL']
    };
    cognitoidentityserviceprovider.adminCreateUser(params, function(err, data) {
        if (err) 
            console.log(err, err.stack); // an error occurred
        else     
            console.log(data); // successful response
    });
}

adminCreateUser('atul.thorat@blazeclan.com', 'Test@123')
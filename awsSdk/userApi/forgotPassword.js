require("dotenv").config();
const { cognitoidentityserviceprovider } = require("./../../lib/initAWS");

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#forgotPassword-property
const forgotPassword = (email) => {
  var params = {
    ClientId: process.env.AWS_COGNITO_CLIENT_ID /* required */,
    Username: email /* required */,
  };
  cognitoidentityserviceprovider.forgotPassword(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred

    console.log(data); // successful response
  });
};

forgotPassword("atul.thorat@blazeclan.com");

require("dotenv").config();
const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminDeleteUser-property
const adminDeleteUser = (email) => {
  var params = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID /* required */,
    Username: email /* required */,
  };
  cognitoidentityserviceprovider.adminDeleteUser(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    console.log(data); // successful response
  });
};

adminDeleteUser("atul.thorat@gmail.com");

require("dotenv").config();
const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminCreateUser-property
const adminResetUserPassword = (email) => {
  var params = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID /* required */,
    Username: email /* required */,
  };
  cognitoidentityserviceprovider.adminResetUserPassword(
    params,
    function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    }
  );
};

adminResetUserPassword("atul.thorat@blazeclan.com");

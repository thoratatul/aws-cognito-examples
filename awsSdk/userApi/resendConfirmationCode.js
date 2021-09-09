require("dotenv").config();
const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#resendConfirmationCode-property
const resendConfirmationCode = (email, password) => {
  var params = {
    ClientId: process.env.AWS_COGNITO_CLIENT_ID /* required */,
    Username: email /* required */,
  };
  cognitoidentityserviceprovider.resendConfirmationCode(
    params,
    function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    }
  );
};

resendConfirmationCode("atul.thorat@blazeclan.com", "Test@123");

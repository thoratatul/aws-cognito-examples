require("dotenv").config();
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId: process.env.AWS_COGNITO_CLIENT_ID, // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const confirmRegistration = (email, verificationCode) => {
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.confirmRegistration(
    verificationCode,
    true,
    function (err, result) {
      if (err) {
        console.log(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    }
  );
};

confirmRegistration("atul.thorat@blazeclan.com", "629947");

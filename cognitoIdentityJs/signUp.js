require("dotenv").config();
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId: process.env.AWS_COGNITO_CLIENT_ID, // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
const attributeList = [];

const signup = (email, password) => {
  const dataEmail = {
    Name: "email",
    Value: email,
  };

  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );
  attributeList.push(attributeEmail);

  userPool.signUp(
    email,
    password,
    attributeList,
    null,
    async function (err, data) {
      if (err) {
        console.log(err.message || JSON.stringify(err));
        return;
      }

      const cognitoUser = data.user;
      console.log("Email is " + cognitoUser.getUsername());
    }
  );
};

signup("atul.thorat@blazeclan.com", "Test@123");

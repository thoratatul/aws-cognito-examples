require("dotenv").config();
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId: process.env.AWS_COGNITO_CLIENT_ID, // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const parseJwt = (token) => {
  // Or we can use jwt-decode npm package
  const { email, exp, auth_time, token_use, sub } = JSON.parse(
    Buffer.from(
      token.idToken.split(".")[1].replace("-", "+").replace("_", "/"),
      "base64"
    ).toString("binary")
  );
  return { token, email, exp, uid: sub, auth_time, token_use };
};

const signIn = (email, password) => {
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  const authenticationData = {
    Username: email,
    Password: password,
  };

  const userAuth = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );

  cognitoUser.authenticateUser(userAuth, {
    onSuccess: (result) => {
      const token = {
        accessToken: result.getAccessToken().getJwtToken(),
        idToken: result.getIdToken().getJwtToken(),
        refreshToken: result.getRefreshToken().getToken(),
      };
      console.log({ statusCode: 200, response: parseJwt(token) });
      // console.log({ statusCode: 200, response: parseJwt(token) });
      return { statusCode: 200, response: parseJwt(token) };
    },

    onFailure: (err) => {
      console.log({
        statusCode: 400,
        response: err.message || JSON.stringify(err),
      });
      return { statusCode: 400, response: err.message || JSON.stringify(err) };
    },
  });
};

signIn("atul.thorat@blazeclan.com", "Test@123");

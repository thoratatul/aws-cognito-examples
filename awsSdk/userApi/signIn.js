require("dotenv").config();
const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

const parseJwt = (token) => {
  // Or we can use jwt-decode npm package
  const { email, exp, auth_time, token_use, sub } = JSON.parse(
    Buffer.from(
      token.IdToken.split(".")[1].replace("-", "+").replace("_", "/"),
      "base64"
    ).toString("binary")
  );
  return { token, email, exp, uid: sub, auth_time, token_use };
};

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#initiateAuth-property
const signIn = (email, password) => {
  var params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };
  cognitoidentityserviceprovider.initiateAuth(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      return false;
    }

    const response =
      data && data.ChallengeName ? data : parseJwt(data.AuthenticationResult);
    console.log(response);
    return response;
  });
};

signIn("atul.thorat@blazeclan.com", "Test@123");

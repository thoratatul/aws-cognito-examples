require("dotenv").config();
const { cognitoidentityserviceprovider } = require("./../../lib/initAWS");

const parseJwt = (token) => {
  // Or we can use jwt-decode npm package
  return JSON.parse(
    Buffer.from(
      token.split(".")[1].replace("-", "+").replace("_", "/"),
      "base64"
    ).toString("binary")
  );
};

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#respondToAuthChallenge-property
const signIn = (email, password, session) => {
  var params = {
    ChallengeName: "NEW_PASSWORD_REQUIRED",
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    ChallengeResponses: {
      NEW_PASSWORD: password,
      USERNAME: email,
    },
    Session: session,
  };
  cognitoidentityserviceprovider.respondToAuthChallenge(
    params,
    function (err, data) {
      if (err) {
        console.log("In Error Block", err, err.stack); // an error occurred
        return false;
      }

      const response = {
        ...data,
        ...{ userDetails: parseJwt(data.AuthenticationResult.IdToken) },
      };
      console.log(response);
      return response;
    }
  );
};

signIn(
  "atul.thorat@blazeclan.com",
  "Atul@123",
  "AYABeF7CdF1UZ96KCf3bi4n7_dYAHQABAAdTZXJ2aWNlABBDb2duaXRvVXNlclBvb2xzAAEAB2F3cy1rbXMATGFybjphd3M6a21zOmFwLXNvdXRoLTE6NjU0NDM0NDQ0NzkwOmtleS8yNjg1NWU1NC05NTMzLTRhNDctYjYxNy1hYjgwYjMyNDkxZWQAuAECAQB4N3rzjt4QmqvhsXtLcL6BZ8_TQOYtuPnEIpMV0cvbYh0BoA6UAJy__NU5uVkXYXE_BAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDG7AtgXePbEfCak5WAIBEIA7TD6ZyuAxyN0Ua_JgNDK9Jv-Y5y2jvgxhzaZ4tNT89c1021EjyvT6kZAhD-6q_5k-ep57OhEs4X14WHgCAAAAAAwAABAAAAAAAAAAAAAAAAAA4k53h8hund2FwXUmnQ3tgv____8AAAABAAAAAAAAAAAAAAABAAAA1UvKWfgWRhsus46dLWMFERAN1bpeED5dw6mxgGQ5WyAJrkUUIffZdYuWe0urdEEAwaWrY6IU9v1ZDPCxV-5tjm7XZod6U5OZ61WxmEMrfZimtg8mOuaiy6peJFBQyoC3L29RGCRqeQJWAbF6oFfAxBRZY2J5CaUzTiZJsYyoq22AjIYj0HiNon3Rt0lVI1P03bjtnaPrDbyad9ahX6Fr2mAcZZDgPenS_4oo1ujRFTAdSoGHl-yTgvdZQmTURXuY19lRzdAIXixegkaWjlgyrmeBKH3Yy7ByJYeGb8y-kTIhyE4gzC4"
);

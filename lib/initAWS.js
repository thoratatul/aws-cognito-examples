require("dotenv").config();
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_COGNITO_REGION,
});

exports.cognitoidentityserviceprovider =
  new AWS.CognitoIdentityServiceProvider();

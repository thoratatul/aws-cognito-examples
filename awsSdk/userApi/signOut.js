require("dotenv").config();
const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#globalSignOut-property
const signOut = (accessToken) => {
  var params = {
    AccessToken: accessToken,
  };
  cognitoidentityserviceprovider.globalSignOut(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};

signOut(
  "eyJraWQiOiI2bHRRY2N4N3ZpbFNFSDFhN3VXMTlrVGlPVlZ2cHF6RnN2N2FnNzNzUDM4PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMDIxMWFlZmQtMTY3OS00MjFkLWFmZDktM2Y0ZmFjYjg2YTUxIiwic3ViIjoiZGNjOTIyMTYtMzZiNC00NjQyLWExM2YtMTA1ZDE3YTg1Yjk5IiwiZXZlbnRfaWQiOiI2MWYxNzQzMy1jZTBmLTQxZWUtODFhYi1iMjRkMTNjZWY5MzgiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjMxMTkwNTU1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzQxVXZJUGNzOCIsImV4cCI6MTYzMTE5NDE1NSwiaWF0IjoxNjMxMTkwNTU1LCJqdGkiOiIxODgwYjI0MC1jMDFlLTQ3MjctYjBhNy00ZGYyODkxMGY2ODAiLCJjbGllbnRfaWQiOiI0MmsyZzdtcWVmaTV2NzRwcG91M2oycGgwNyIsInVzZXJuYW1lIjoiZGNjOTIyMTYtMzZiNC00NjQyLWExM2YtMTA1ZDE3YTg1Yjk5In0.i6RJ_JRBIvBauVu2fwtWIEprXgollntYHrhVdKbEUO9o_vT3qQdfGOIeHem28V1aHUVL9Mwh8Fp47rHUEFQvQC8dID7Tqn20gquqS0C2cdnRWqTx4BGpHrAUMZSJenOzanffyHwOdjUhHIKs2wZatZSx7Rrp7EOP8Knx1C9ue_yIAQ8dy02PfdpRmg-5fOrd6o134ROebYyoBDAn_DFyr2xcfQa2dZ4xPg4HjPtijO5aCNb-RBaVVyX8s_YTH0QELSWl4zGpJu3rpFD6-5hIrBRUrKbIkiLoPy6x0N8E_F3IU_jtT2H7cprNO4BS8f33JA1kzVRcUYQpbftuTzT0DA"
);

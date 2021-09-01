const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#changePassword-property
const changePassword = (password, newPassword, accessToken) => {
  var params = {
    AccessToken: accessToken /* required */,
    PreviousPassword: password /* required */,
    ProposedPassword: newPassword /* required */,
  };
  cognitoidentityserviceprovider.changePassword(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred

    console.log(data); // successful response
  });
};

changePassword(
  "Test@123",
  "Atul@123",
  "eyJraWQiOiI2bHRRY2N4N3ZpbFNFSDFhN3VXMTlrVGlPVlZ2cHF6RnN2N2FnNzNzUDM4PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMjMyZjJlMWQtYmI4ZS00MTE2LThhNzktNDM1OWFiNzhlZGFiIiwic3ViIjoiYWM2OWY5ZTQtZWJjZi00OWI4LWJkMzUtYTY5Y2UyY2E0NjBmIiwiZXZlbnRfaWQiOiJlOGEwM2EyOS0xYjRjLTQ2NTEtYWVmYS0wMmI0MzkzYjE5ZjEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjMwNDM5MzM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzQxVXZJUGNzOCIsImV4cCI6MTYzMDQ0MjkzOSwiaWF0IjoxNjMwNDM5MzM5LCJqdGkiOiIyODFhMmQxYS01OTQxLTRiYTEtODJhNi1jMWVmZWIyMjFkN2IiLCJjbGllbnRfaWQiOiI0MmsyZzdtcWVmaTV2NzRwcG91M2oycGgwNyIsInVzZXJuYW1lIjoiYWM2OWY5ZTQtZWJjZi00OWI4LWJkMzUtYTY5Y2UyY2E0NjBmIn0.JAOBhIxIWzTMEhYS8_N_0dGWchV4s2mOaam3_PaEXKmIscmX8Z9AlNSmQC59PG_05w_RvAfsT924-Pe9cdCa7MFTQTvoIZMD1kHNcwYNkSjgB_bvHlk2-mBar-IA7T_6LvPGTTCuifrE5PYWS7ouf8QfnR18WudODb-tadrWMPg-LeC7QvJMzR9ounUIB8Hzv4ZnGLBwjLYzQkGpbY3fD0T9feXx1fujE3DbrU3XBI6qt3avOtvbyNKB8GkZHIKlDYayrXcivAOKiEsTzQEQ2iJlyqElZ6aKv_ohi2OFMLuqo0E8w5Y8dnLRpVR3MEiH18I6h-g4NdtBiY-9LAtouQ"
);

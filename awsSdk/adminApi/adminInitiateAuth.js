require("dotenv").config();
const { cognitoidentityserviceprovider } = require("../../lib/initAWS");

// This API can be used to generate new access token using refresh token
// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminInitiateAuth-property
const adminInitiateAuth = (refreshToken) => {
  var params = {
    AuthFlow: "REFRESH_TOKEN_AUTH",
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    AuthParameters: {
      REFRESH_TOKEN: refreshToken,
    },
  };
  cognitoidentityserviceprovider.adminInitiateAuth(
    params,
    function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        return false;
      }

      const response =
        data && data.ChallengeName ? data : data.AuthenticationResult;
      console.log(response);
      return response;
    }
  );
};

adminInitiateAuth(
  "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.l9QVffLZcCE9F0LqXymRnIx4IwGwyd1r24IBH3vh_CEacH97osjOobgZf6tZUxzPG85ErhTXRuqyfOvDZ-Z3njOC1dqWEBfhE8izBViMdPK0GcPwS5qscRGyvB3VunK_F1ppyHWyC2FnB-PgpbGvAh2UXYNF5fM63MLqYo5Bp7O47xYq5mPdmgnkzgTOVZay0pJN669FplLVUtS11K00ZWjhwyP_c823QQdsWt9zsRM0vukYTrSMlXsOLDP6Sf6ePJ8HkVqStpuEQlzQFQSO6k3bnWk1ceS1473tjhcux8qJUrA4FpIb2BA26Nt2YqePNB1naRkMjoQOuLb2DH1FLQ.kHg1ycIW1l17xtAM.QFz7cnMiUv_gDa7P4HUnP_7tB0kZYztwyK8tgM1HY20YhRdqziSozkmEZoCMayvFN3B5pZI-QggVeg69WeSf7EbVZQVStwHJtc43RZeN3nFJ5nURtOitsDlxZlzMXsHZ7tyDeWAi2Uii19QjsgUEfYx1GCJJLOS39EDLtxEk5v29lrm0vD_4gfaQZi6ZWdNRqLQhSluhjXQuAnilu1DFtaxZ_hyIBFIe5t0xhccW2MNMxvhwwpWwg5gpcVZixW1ul5KpU8R3_Xa81N0-O2TfjJTI2lBW_Ry7hvDgr2KChaagg3Ugy-fEtNYYhV7cGAYVB8QDNACdzwSZ_JSzomxbTaGY000IkxGnPrBQRU_J0EBWHX5J3z0EDORpaVP-7qBieC8y-tkZWhQlr9CcrBk6ogKqfZzetGePOhssc_RU1K2s0Wi_KQpzAQlO80tnx01vuMsCic7kkxAXMPZv6RHr2YtIzx9PVBuFlJ3HNn3EusYtmjD6CT9TFBAxyU3e7F7bG1WNx2WBzNisFwmdPMAE_mR28SpK3E-RR5fkS5dwhV39SdgGlYiGqa01bWlDdUAToMetAqKdJTaaYpvOfNzRZ0qJdPkpuDnPSIshG2VPeBq6Oy1uYoZvhZPXNGO5QQxCoyrdDlhypH2lvCFiAJ8B65K86x5G6f0LY36s4KYpBmLDE6MBP4xN-Oc9v7ZdHJH0Ni24s8Xo27TYPXvKUAD7K816G_S2tu2rp4s-xY1dA1Z-I93aB1938tfVOpHZlRew4ahpagQyTi9qBJNtA2s-dddg0nEDKIfhm4VghchMhro8jE5IyVXD209Hxz1gRFjHrI4lSSnINZmzT1XLKg3Zwc68SZleVfVVx_cSQ0brtarK-V74MQJCur3CwiWyA7FN8BsIP6ZgipKjwQzp6pPdk8xFNhmpCKvv8n5p0Y8SU1ziOZHFXqvGQwMx-xcjETd8gLQJg4JpoIb9FI10G3OMJ39ygzrBwkdPd2JaL5lib9u1fcKhDNfNb3Q6KLt7ZjWVErkyxJjfYBSU4vjkhQHap0TsJ6AOhRRVHOnY0amIEflYdtXMZQDu79Rgmcn0aCGyCrsUKYK1vInIUqrzm9qkCINemhwP4qpO_xQcKLWUUJ-ZT8MkLmGIsE5DDDjbYX-QFJHdf0kAmp1CDj0I689v6t67r852cPqhZeVHOnLk0bzG6FyPT8BMK-a8XbTqRsagVDGMSsU2yNv-m-TNJIcTwBs163MxUsDKn4je8oM9HaJar1DwXnNMRRMZaM1_xmGPgZjRx-b3c_BPs4RYekfvlFTRfBQtFA57v5PrjhmMKW0q8VjCxo0E6hoK06Yy9rk.s7i0SJss3Iy-Lc8u3gza4g"
);

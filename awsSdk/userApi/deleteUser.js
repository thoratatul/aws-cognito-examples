const {cognitoidentityserviceprovider} = require('../../lib/initAWS');

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#deleteUser-property
const deleteUser = (accessToken) => {
    var params = {
        AccessToken: accessToken
    };
    cognitoidentityserviceprovider.deleteUser(params, function(err, data) {
        if (err)
            console.log(err, err.stack); // an error occurred 
        console.log(data); // successful response
    });
}

deleteUser('eyJraWQiOiI2bHRRY2N4N3ZpbFNFSDFhN3VXMTlrVGlPVlZ2cHF6RnN2N2FnNzNzUDM4PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiOTNlZTVhZTctZDE0Mi00OTZjLWI3YjktYjkwMWMxMWY5ZmMwIiwic3ViIjoiYWFlMmEzNDgtYmM5Yy00MTMyLWFmNTMtMjY1OGEzZDQ5ZWQ5IiwiZXZlbnRfaWQiOiIzYzJjMWMwZi0yMTc3LTRhZDMtODNjZi0yZTcwM2ExY2RhOGQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjMwNDQ5MTQyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzQxVXZJUGNzOCIsImV4cCI6MTYzMDQ1Mjc0MiwiaWF0IjoxNjMwNDQ5MTQyLCJqdGkiOiJkY2NmOTljZi1hMGRjLTQ1ZWYtYmNlNS1mYTY5YTQ5NWNhNjgiLCJjbGllbnRfaWQiOiI0MmsyZzdtcWVmaTV2NzRwcG91M2oycGgwNyIsInVzZXJuYW1lIjoiYWFlMmEzNDgtYmM5Yy00MTMyLWFmNTMtMjY1OGEzZDQ5ZWQ5In0.TkpWFFmuiH6OiPyJhzO7atnn47aQp0CEHuaixjie2a_3fkN-5ADThjR0Gbxrg5uyFB3xR0tfojOkZ-Tg_dCBanTLmFwrs8TC21ud_jQn81jZs0JXwN9uQP09cdMxSl5JX-61bVKNZKvxh5srvT7WVGuvCCpi9mFpQpKZmCCv6NQvaH-4QFG0_4XFR01F4UZ4ipopoVLzJfAg_tcpAvZIEIdDvYsY22HTW5bB_EYEy3HxM_x68wy3AFNDYz0-uIgP0G-5TpHGwGd1iMv9oDUWozJ9r5Kx8IbC30dXVQ9HuMYsLW6mzY8-A1dd36pgCRxD8DtGy292uMvI4fISbVdN_A')
require('dotenv').config();
const {cognitoidentityserviceprovider} = require('./../../lib/initAWS');

const parseJwt = (token) => { // Or we can use jwt-decode npm package
    return JSON.parse(Buffer.from(token.split('.')[1].replace('-', '+').replace('_', '/'), 'base64').toString('binary'));
};

// Refer : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#respondToAuthChallenge-property
const signIn = (email, password, session) => {
    var params = {
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: process.env.AWS_COGNITO_CLIENT_ID,
        ChallengeResponses: {
            NEW_PASSWORD: password,
            USERNAME:email
        },
        Session: session
    };
    cognitoidentityserviceprovider.respondToAuthChallenge(params, function(err, data) {
        if (err) {
            console.log('In Error Block', err, err.stack); // an error occurred
            return false
        }
        
        const response = {...data, ...{userDetails: parseJwt(data.AuthenticationResult.IdToken)}}
        console.log(response);
        return response;
    });
     
}

signIn('atul.thorat@gmail.com', 'Atul@123', 'AYABeEHpmx6RPd2WbpECGf3pBc4AHQABAAdTZXJ2aWNlABBDb2duaXRvVXNlclBvb2xzAAEAB2F3cy1rbXMATGFybjphd3M6a21zOmFwLXNvdXRoLTE6NjU0NDM0NDQ0NzkwOmtleS8yNjg1NWU1NC05NTMzLTRhNDctYjYxNy1hYjgwYjMyNDkxZWQAuAECAQB4N3rzjt4QmqvhsXtLcL6BZ8_TQOYtuPnEIpMV0cvbYh0B9ZedZkLYzuOK3X1hErGgEgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDDWlbn8D-y5uAJUc6QIBEIA78cABdHmP8kYPclKu73nm30I6fkSnHf9b5sfzbB-dSFp-gUMgJAWCSrYv6RXMCjAE_S26IIQ4FtU_8vkCAAAAAAwAABAAAAAAAAAAAAAAAAAALOWJWzXDklQWDTA_gumC1_____8AAAABAAAAAAAAAAAAAAABAAAA1QF2Gg8l061gSCqK3VuG8JoG_MtTSJM4sXaND9WWSWesuLSHpflNEzc9aTllxaNMBiYGaq9B3oRUxy-RmiE2k0hIOuJBayLSN1z4qZS-oZqdOKX4Q0MUBUYgMjFRzqQ_l7HgGje3i94Zgwc26JVFNQDkN7Pqv21LLIZht80j65T0Vsw6NlgU39Nq-WQ2WURLsc5Deam_wfbchq4dVX1ccP31lpkztJeuhDMJC8G2cKQ4RQ7CauYOjaJaPPONnA3KuUX5rCaoNF7BPBWgcEMlH_L4lPYt6jrkM9G_GBmy2B6EF7ywZAY')
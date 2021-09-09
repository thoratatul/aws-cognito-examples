const jwt = require("jsonwebtoken");
const jwkToPem = require("jwk-to-pem");
const jwk = require("./../../lib/jwks.json");
const pem = jwkToPem(jwk.keys[0]);

const parseJwt = (token) => {
  // Or we can use jwt-decode npm package
  const decodedToken = JSON.parse(
    Buffer.from(
      token.split(".")[1].replace("-", "+").replace("_", "/"),
      "base64"
    ).toString("binary")
  );
  return decodedToken;
};

const verifyToken = async (idToken) => {
  const idTokenDecoded = await parseJwt(idToken);
  jwt.verify(
    idToken,
    pem,
    { algorithms: ["RS256"] },
    function (err, decodedToken) {
      if (err) {
        console.log("err", err);
        return err;
      }
      console.log("decodedToken", decodedToken);
    }
  );
};

verifyToken(
  "eyJraWQiOiJ6amV6MXAzTEp2YlArVStkUGhwNlNveFplc3d6bG9hMVJ2MTdMQUhtdktVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1MjNmMzYzMC1mOTExLTQ4MzAtOTAxYi1iYWJjYjdjYmNhNGIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV80MVV2SVBjczgiLCJjb2duaXRvOnVzZXJuYW1lIjoiNTIzZjM2MzAtZjkxMS00ODMwLTkwMWItYmFiY2I3Y2JjYTRiIiwib3JpZ2luX2p0aSI6IjUzYzMyMmI3LWQ2MTItNDQyZS05NjM5LWRhNTg4NGQyNjRhNCIsImF1ZCI6IjQyazJnN21xZWZpNXY3NHBwb3UzajJwaDA3IiwiZXZlbnRfaWQiOiIzYjdiNjJjMC1mNWM3LTRkNmUtOGJiMC03ZGQwZWU0MzRiYWYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYzMDkxNDg2NywiZXhwIjoxNjMwOTE4NDY3LCJpYXQiOjE2MzA5MTQ4NjcsImp0aSI6IjQ3NjU1OGNjLTBkNWQtNDU4Yi1iZTViLTQ1YmIzZDAyOTcyZiIsImVtYWlsIjoiYXR1bC50aG9yYXRAYmxhemVjbGFuLmNvbSJ9.Y7dX-5kVbV90z9l5-If1LxgjE8wXxO57UEgWvTEBP-1kquMGYODqsXDjMbNmU6F0UGxQFfx69HObRR5641RKzx_vNq82C7UHHZHhFXxe5VjwPxuU7NFDc9KrAfNwBsDmFxgGPCCO5Ww0kzSYjPi-HLljCx3t9qnUzKaDchCavN_g2D18wp5KekLTDFLlOGUc1LHNgNZSzZUSaIBxdaCzDNujMO-uGjvXf31tp9ZVj3Jpjf-ldSPCeOQKGw63lKmhG48yeCr97B1kLVBtx_o1TGD0FlhUSmjwFTULfT4s--WkCOC3_C-xnc32_vedRAzP8_csPTxeuiWN0YlvrPfFtA"
);

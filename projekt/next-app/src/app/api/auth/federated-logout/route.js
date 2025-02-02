import { getToken } from "next-auth/jwt";

function logoutParams(token){
    return {
      id_token_hint: token.idToken,
      post_logout_redirect_uri: process.env.NEXTAUTH_URL,
    };
  }
  
  function handleEmptyToken() {
    const response = { error: "No session present" };
    const responseHeaders = { status: 400 };
    return Response.json(response, responseHeaders);
  }
  
  function sendEndSessionEndpointToURL(token) {
    const endSessionEndPoint = new URL(
      `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout`
    );
    const params= logoutParams(token);
    const endSessionParams = new URLSearchParams(params);
    const response = { url: `${endSessionEndPoint.href}/?${endSessionParams}` };
    return Response.json(response);
  }
  
  export async function GET(req) {
    try {
      const token = await getToken({ req })
      if (token) {
        return sendEndSessionEndpointToURL(token);
      }
      return handleEmptyToken();
    } catch (error) {
      console.error(error);
      const response = {
        error: "Unable to logout from the session",
      };
      const responseHeaders = {
        status: 500,
      };
      return Response.json(response, responseHeaders);
    }
  }
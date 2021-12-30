import auth0 from "auth0-js";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// new instance of auth0
let webAuth = new auth0.WebAuth({
	domain: domain,
	clientID: clientId,
});

export default webAuth;

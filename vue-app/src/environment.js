/* istanbul ignore file */
// eslint-disable-next-line import/no-mutable-exports
let environment = {
    version: '1.0',
    production: false,
    testing: false,
    cognito_username: process.env.VUE_APP_COGNITO_USERNAME,
    cognito_password: process.env.VUE_APP_COGNITO_PASSWORD,
    userPoolId: process.env.VUE_APP_USER_POOL_ID,
    clientId: process.env.VUE_APP_CLIENT_ID,
    communications_notifications_hub_api_url: process.env.VUE_APP_COMMUNICATIONS_NOTIFICATIONS_HUB_API_URL,
    communications_notifications_hub_api_key: process.env.VUE_APP_COMMUNICATIONS_NOTIFICATIONS_HUB_API_KEY,
    elements2_okta_issuer: process.env.VUE_APP_OKTA_ISSUER,
    elements2_okta_client_id: process.env.VUE_APP_OKTA_CLIENT_ID,
};

// eslint-disable-next-line import/no-mutable-exports
let singleSpa = {
    navigateToUrl: (url) => {
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, null, url);
    },
};

// eslint-disable-next-line no-return-assign
const setEnvironment = (value) => environment = value || environment;

// eslint-disable-next-line no-return-assign
const setSingleSpa = (value) => singleSpa = value || singleSpa;

export {
    environment,
    setEnvironment,
    singleSpa,
    setSingleSpa,
};
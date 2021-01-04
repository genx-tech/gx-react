const endpointBase = process.env.REACT_APP_API_ENDPOINT_BASE;
if (!endpointBase) {
    throw new Error('Missing env variable "REACT_APP_API_ENDPOINT_BASE".');
}

const settings = {
    apiEndpoint: `${endpointBase}/api/v1`,
    localStorageKey: 'ru-web',
    landingPath: '/',
    localeBaseUrl: '/locale',
};

export default settings;

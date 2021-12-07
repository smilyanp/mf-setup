/* istanbul ignore file */
// eslint-disable-next-line import/no-mutable-exports
let environment = {
    environmentName: 'local',
    maxRetryAttempts: 1,
    retryScalingDuration: 10000,
};

// @ts-expect-error unsure why the other apps do this
// eslint-disable-next-line no-return-assign
const setEnvironment = (value: string) => environment = value || environment;

export {
    environment,
    setEnvironment,
};
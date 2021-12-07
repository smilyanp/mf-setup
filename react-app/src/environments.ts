export let environment = {
  environmentName: 'local',
      maxRetryAttempts: 1,
      retryScalingDuration: 10000,
};

const setEnvironment = value => environment = value;
const getEnvironment = () => environment;

export {
  setEnvironment,
  getEnvironment
}
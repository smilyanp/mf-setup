/* eslint-disable */
define('@mf-setup/environment',
  [],
  // module definition function
  // dependencies (foo and bar) are mapped to function parameters
  function () {
    // return a value that defines the module export
    // (i.e the functionality we want to expose for consumption)

    // create your module here
    return {
      environmentName: 'local',
      maxRetryAttempts: 1,
      retryScalingDuration: 10000,
    };
  }
)

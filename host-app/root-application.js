/* eslint-disable */
import * as singleSpa from 'single-spa';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import eventBus from './event-bus';

// root application utils
import { 
  showWhenPrefix, 
  load
} from './root-methods.util';

System.import('@mf-setup/environment').then(m => m.default).then(environment => {
  window.environment = environment;
  
  singleSpa.registerApplication(
    'react-app',
    () => load('@mf-setup/react-app'),
    showWhenPrefix(['/user-management', '/user/profile']),
    { environment, eventBus, features },
  );

  singleSpa.registerApplication(
    'vue-app',
    () => load('@mf-setup/vue-app'),
    showWhenPrefix(['/user/profile']),
    { environment, eventBus, features },
  );

  singleSpa.start();
});

import { config } from '@vue/test-utils';
import Vue from 'vue';

/**
 * What is this file for?
 * During testing the main.js file is not used, so we need to import register-global-components.js here too.
 */
import ResizeObserver from 'resize-observer-polyfill';

import './register-global-components';

// We don't want to have to setup the Vuex module for feature switching to test components
// that might happen to have a feature switch. Feature switching is already unit tested.
// So we tell @vue/test-utils to stub the feature component to be a div and therefore a pass through
// replacement that always renders it's slotted content.
config.stubs.Feature = { name: 'Feature', template: '<div><slot></slot></div>' };

// These messages seem to have suddenly started appearing in the console now that scoped slots are being tested?
// Not sure if a bug, will make a reproduction and if it's a bug I'll make an issue on @vue/test-utils.
Vue.config.productionTip = false;
Vue.config.devtools = false;
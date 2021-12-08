/**
 * What is this file for?
 * Some components are registered globally, meaning they don't need to be imported to be used.
 * This should generally only be the reusable components used throughout the application in /components/common.
 *
 * We also tell Vue to ignore any of the IRIS design system web components.
 */

import Vue from 'vue';

Vue.config.ignoredElements = [/iris-\w*/];
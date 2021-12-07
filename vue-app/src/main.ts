/* eslint-disable import/no-mutable-exports */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const element = 'vue-app';

// A utility function
const waitForElement = (elementId: string, callback: any) => {
    const expectedElement = document.getElementById(elementId);
    if (!expectedElement) {
        window.setTimeout(() => {
            waitForElement(elementId, callback);
        }, 100);
        return;
    }
    console.log('** element exists', elementId);
    callback();
};

let mount = async (props: any) => {};
let unmount = async (props: any) => {};
let bootstrap = async (props: any) => {};
let update = async (props: any) => {};
let vueLifecycles = {
    mount,
    unmount,
    bootstrap,
    update,
};

console.log('** PRODUCTION');
vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render () {
            return h(App, {
                name: this.name,
                // @ts-expect-error single-spa docs claim these properties exist...
                mountParcel: this.mountParcel,
                // @ts-expect-error single-spa docs claim these properties exist...
                singleSpa: this.singleSpa,
            });
        },
        el: `#${element}`,
    },
    replaceMode: true,
});

mount = async (props) => {
    console.log('** mounting');
    waitForElement(element, () => {
        console.log('** found element and mounting Vue Single SPA');
        return vueLifecycles.mount(props);
    });
};

unmount = async (props) => {
    console.log('** unmounting vue app');
    return vueLifecycles.unmount(props);
};

bootstrap = vueLifecycles.bootstrap;
update = vueLifecycles.update;

export { mount, unmount, bootstrap };
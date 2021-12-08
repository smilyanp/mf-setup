/* eslint-disable import/no-mutable-exports */
/* istanbul ignore file */
import { applyPolyfills, defineCustomElements } from '@iris/platform-ui-kit/loader';
import singleSpaVue from 'single-spa-vue';
import Vue from 'vue';
import { setEnvironment, environment as devEnvironment, setSingleSpa } from './environment';

import './assets/tailwind.css';

import App from './App.vue';

import './register-global-components';

Vue.config.ignoredElements = [/iris-\w*/];
Vue.config.productionTip = false;

applyPolyfills().then(() => {
    defineCustomElements();
});

// During development we will use Vue normally but in production SingleSPA will be loaded.
let mount = async () => {};
let unmount = async () => {};
let bootstrap = async () => {};
let vueLifecycles = {
    mount,
    unmount,
    bootstrap,
};

if (process.env.NODE_ENV === 'development') {
    setEnvironment(devEnvironment);
    new Vue({
        render: (h) => h(App),
    }).$mount('#communications-notifications-app');
}

if (process.env.NODE_ENV === 'production') {
    vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: '#vue-app',
            render (h) {
                setEnvironment(this.environment);
                setSingleSpa(this.singleSpa);
                return h(App, {
                    props: {
                        // single-spa props are available on the "this" object. Forward them to your component as needed.
                        // https://single-spa.js.org/docs/building-applications#lifecyle-props
                        name: this.name,
                        mountParcel: this.mountParcel,
                        singleSpa: this.singleSpa,
                        eventBus: this.eventBus,
                    },
                });
            },
        },
    });

    // This must be async when called from singleSpa in the host app
    mount = async (props) => {
        vueLifecycles.mount(props);
    };

    unmount = async (props) => {
        vueLifecycles.unmount(props);
    };

    bootstrap = vueLifecycles.bootstrap;
}

export { mount, unmount, bootstrap };
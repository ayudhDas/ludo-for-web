import Vue from 'vue';
import App from './App.vue';

const VueAppInstance = new Vue({
    render: createElement => createElement(App),
});

VueAppInstance.$mount('#app-root');

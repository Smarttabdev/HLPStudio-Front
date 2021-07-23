import Vue from "vue";
// import Vuex from "vuex";
import { VueCsvImport } from "vue-csv-import";
import BootstrapVue from "bootstrap-vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import GetTextPlugin from "vue-gettext";
import translations from "./languages";
import store from './store';
import io from 'socket.io-client';
import VuePano from '@black40x/vue-pano'
import '@black40x/vue-pano/dist/vue-pano.css'

Vue.use(VuePano)



//googl place autocomplete
import VuePlaceAutocomplete from "vue-place-autocomplete";

import "./plugins/vuetify";
import router from "./router";
import App from "./App";

import Default from "./Layout/Wrappers/baseLayout.vue";
import Pages from "./Layout/Wrappers/pagesLayout.vue";
import Apps from "./Layout/Wrappers/appLayout.vue";


let socket = null;

/** Socket IO Client - Store in Vuex State for use in components */
if (process.env.NODE_ENV === 'development')
{
    console.log('rr')
    socket = io('http://10.10.10.167:3001', {transports: ['websocket', 'polling', 'flashsocket']});
} else {
    socket = io('/');
}

store.dispatch('assignSocket', socket);


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
// Vue.use(Vuex);
Vue.use(VuePlaceAutocomplete);
Vue.use(GetTextPlugin, {
    defaultLanguage: "fi_FI",
    translations: translations
});

Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);
Vue.component("apps-layout", Apps);
Vue.component("vue-csv-import", VueCsvImport);

new Vue({
    el: "#app",
    router,
    template: "<App/>",
    store: store,
    components: { App }
});

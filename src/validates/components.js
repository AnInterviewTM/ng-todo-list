import Vue from "vue";

import { ValidationObserver, ValidationProvider, localize } from "vee-validate";
import { dictionary } from "./constants";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

const locale = document.documentElement.lang;

localize(locale, dictionary[locale]);

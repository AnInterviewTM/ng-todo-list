import ErrorForm from "./error-form/error-form";
import AuthForm from "./auth-form/auth-form";

export default function install(Vue) {
  Vue.component(ErrorForm.name, ErrorForm);
  Vue.component(AuthForm.name, AuthForm);
}

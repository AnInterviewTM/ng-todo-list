import ErrorForm from "./error-form/error-form";
import AuthForm from "./auth-form/auth-form";
import TodoForm from "./todo-form/todo-form";

export default function install(Vue) {
  Vue.component(ErrorForm.name, ErrorForm);
  Vue.component(AuthForm.name, AuthForm);
  Vue.component(TodoForm.name, TodoForm);
}

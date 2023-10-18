import PersonalInfo from "./personal-info/personal-info";
import TodosInfo from "./todos-info/todos-info";
import TodosCard from "./todos-info/todos-card/todos-card";

export default function install(Vue) {
  Vue.component(PersonalInfo.name, PersonalInfo);
  Vue.component(TodosInfo.name, TodosInfo);
  Vue.component(TodosCard.name, TodosCard);
}

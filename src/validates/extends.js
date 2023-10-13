import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

for (const rule in rules) {
    extend(rule, rules[rule]);
}

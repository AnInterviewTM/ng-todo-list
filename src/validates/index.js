import "./components.js";
import "./extends.js";

export const VALIDATE = async context =>
    (await context.$refs)
        ? context.$refs.observer.validate()
        : context.refs.observer.validate();

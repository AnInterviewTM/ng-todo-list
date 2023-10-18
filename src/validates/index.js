import "./components";
import "./extends";

export const VALIDATE = async context =>
  (await context.$refs)
    ? context.$refs.observer.validate()
    : context.refs.observer.validate();

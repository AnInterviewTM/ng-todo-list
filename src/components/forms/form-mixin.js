import { VALIDATE } from "../../validates/index.js";

const messageGetter = x => x.message;

/**
 * TODO: We use it in the component (where it is needed and if it is really needed)
 *
 * We bring to the senses mistakes. The format that >
 * we need for the validator to work correctly.
 */
export function getErrors(errors) {
  return Object.keys(errors).reduce((acc, x) => {
    acc[x] = errors[x].map(messageGetter);
    return acc;
  }, {});
}

export default {
  methods: {
    /**
     * We check whether everything is filled in, >
     * entered, according to the form validator.
     */
    async validateBeforeSubmit(data) {
      const isValid = await VALIDATE(this);
      await this.submit(isValid, data);
    },

    /**
     * We determine the fate of the form data.
     * @param { Boolean } isValid - Validation state.
     * @param { Object } data - Data set.
     */
    submit(isValid, data) {
      /** Not valid. No no no. */
      if (!isValid) {
        return Promise.reject();
      }

      /**
       * To block the button at the time of >
       * the request to the server.
       */
      this.isRequest = true;

      /***/
      return this.catchFormErrors(
        /**
         * Okay, it's okay. I transfer the >
         * data to be sent to the server.
         * Good luck.
         */
        this.send(data)
      ).finally(() => {
        /**
         * In any case, you can now the >
         * button active.
         */
        this.isRequest = false;
      });
    },

    /***/
    catchFormErrors(promise) {
      return promise.catch(e => {
        const clientError = 400;
        const serverError = 500;

        /**
         *  If there are mistakes, that's it.
         */
        if (!e.status || clientError > e.status || serverError <= e.status) {
          throw e;
        }

        /**
         * If there are no errors, then you >
         * can watch the server response.
         * Goto send method.
         */
        if (!this.setErrors) {
          return e;
        }

        /**
         * There are some server errors and >
         * they need to be normalized according >
         * to the standard in the backend.
         * Updating, editing is allowed, >
         * but smartly please.
         */
        return e
          .json()
          .then(body => {
            const errors = {};

            /***/
            body.errors.forEach(error => {
              if ("request" === error.domain) {
                Object.assign(errors, error.state);
              }
            });

            /***/
            this.setErrors(errors);

            return e;
          })
          .catch(error => {
            console.log(error);
          });
      });
    },

    /**
     *  If suddenly, well, maybe you need >
     *  to clear the form, then here.
     *  Cleaning will be the key that we >
     *  choose ourselves. But it has to be.
     *  @param { String } key - State key.
     */
    clearStateKey(key) {
      /** Clear this state { key } */
      Object.entries(this[key]).forEach(([el]) => {
        this[key][el] = null;
      });
    }
  }
};

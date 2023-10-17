import { VALIDATE } from "../../validates/index";

export default {
  methods: {
    /**
     * We check whether everything is filled in, >
     * entered, according to the form validator.
     */
    async validateBeforeSubmit(data) {
      const isValid = await VALIDATE(this);

      /**
       * To block the button at the time of >
       * the request to the server.
       */
      this.isRequest = true;

      /** */
      await this.catchErrors(isValid, data)
        .then(() => {
          /**
           * Sent request API.
           */
          this.request(data);
          this.error = [];
        })
        .catch(error => {
          /**
           * Create new error.
           */
          this.error.push(error);
          console.log(error);
        })
        .finally(() => {
          /**
           * In any case, you can now the >
           * button active.
           */
          this.isRequest = false;
        });
    },

    catchErrors(isValid) {
      return new Promise((resolve, reject) => {
        if (!isValid) {
          reject("Something went wrong.");
        } else {
          resolve();
        }
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

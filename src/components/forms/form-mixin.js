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
          if (this.error.length) {
            this.error = [];
          }
          this.request(data);
        })
        .catch(error => {
          /**
           * Create new error.
           */
          if (!this.error.length) {
            this.error.push(error);
          }
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
        if (isValid) {
          resolve();
        } else {
          reject("Something went wrong.");
        }
      });
    },
  }
};

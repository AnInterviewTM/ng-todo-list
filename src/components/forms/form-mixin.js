import { VALIDATE } from "../../validates/index";

export default {
  methods: {
    async validateBeforeSubmit(data) {
      const isValid = await VALIDATE(this);

      this.isRequest = true;

      /** */
      await this.catchErrors(isValid, data)
        .then(() => {
          if (this.error.length) {
            this.error = [];
          }
          this.request(data);
        })
        .catch(error => {
          if (!this.error.length) {
            this.error.push(error);
          }
          console.log(error);
        })
        .finally(() => {
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

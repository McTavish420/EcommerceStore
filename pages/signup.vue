<template>
  <div class="registerPage">
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-4 mx-auto">
          <div class="text-center">
            <nuxt-link to="/"><img src="/img/ECOM.png" /></nuxt-link>
          </div>

          <form class="mt-4">
            <div class="a-box a-spacing-extra-larger">
              <div class="a-box-inner">
                <h1 class="a-spacing-small text-center">Create Account</h1>

                <!-- Username Field -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Username</label
                  >
                  <input
                    type="text"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="userName"
                  />
                  <div class="a-alert-container" v-if="nError">
                    <div
                      class="a-alert-content text-danger"
                      style="font-weight: normal; font-size: 7"
                    >
                      {{ nameError }}
                    </div>
                  </div>
                </div>

                <!-- Email Field -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="email"
                  />
                  <div class="a-alert-container" v-if="eError">
                    <div class="a-alert-content text-danger">
                      {{ emailError }}
                    </div>
                  </div>
                  <div class="a-alert-container" v-if="eAvail">
                    <div
                      class="a-alert-content text-danger"
                      style="font-weight: normal; font-size: 7"
                    >
                      {{ emailAvail }}
                    </div>
                  </div>
                </div>

                <!-- Password Field -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="password"
                  />
                  <div class="a-alert-container" v-if="pError">
                    <div class="a-alert-content text-danger">
                      {{ passError.head }}
                      <ul
                        class="text-danger"
                        style="
                          list-style-type: circle;
                          font-weight: normal;
                          font-size: 7;
                        "
                      >
                        <li>{{ passError.lower }}</li>
                        <li>{{ passError.upper }}</li>
                        <li>{{ passError.digit }}</li>
                        <li>{{ passError.special }}</li>
                        <li>{{ passError.length }}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Create Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignUp">
                        Create Your Account
                      </span>
                    </span>
                  </span>

                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      By creating account you agree to our
                      <a href="#">Terms &amp; Conditions</a> and
                      <a href="#">Privacy Notice</a>.
                    </b>
                  </div>
                </div>
                <hr />

                <div class="a-row">
                  <b>
                    Already have an account?
                    <nuxt-link to="/login" class="a-link-emphasis"
                      >Sign In</nuxt-link
                    >
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  layout: "none",

  data() {
    return {
      userName: "",
      email: "",
      password: "",
      nameError: "Username must be between 6 to 12 characters.",
      emailError: "Enter an Email address that is in valid format.",
      emailAvail: "",
      passError: {
        head: "Password must contain",
        lower: "at lease 1 lowercase letter",
        upper: "at least 1 uppercase letter",
        digit: "at least 1 numerical digit",
        special: "at least 1 special character",
        length: "at least 6 characters long.",
      },
      eAvail: false,
      nError: false,
      eError: false,
      pError: false,
    };
  },

  methods: {
    async onSignUp() {
      try {
        let data = {
          userName: this.userName,
          email: this.email,
          password: this.password,
        };
        let response = await this.$axios.$post(
          `${process.env.DEV_BACKEND}/api/auth/email`,
          data
        );
        if (!response.success) {
          this.eAvail = true;
          this.emailAvail = response.message;
          return;
        } else {
          this.eAvail = false;
          this.emailAvail = "";
        }
        let nSuccess = false;
        let eSuccess = false;
        let pSuccess = false;
        if (!this.checkUserName(data.userName)) {
          this.nError = true;
        } else {
          this.nError = false;
          nSuccess = true;
        }
        if (!this.checkEmail(data.email)) {
          this.eError = true;
        } else {
          this.eError = false;
          eSuccess = true;
        }
        if (!this.checkPassword(data.password)) {
          this.pError = true;
        } else {
          this.pError = false;
          pSuccess = true;
        }

        if (nSuccess && eSuccess && pSuccess) {
          let response = await this.$axios.$post(
            `${process.env.DEV_BACKEND}/api/auth/signup`,
            data
          );

          if (response.success) {
            this.$router.push("/");
          }
        }
      } catch (error) {
        this.email = ""
        this.password = ""
        this.userName = ''
        this.nError = true
        this.pError = true;
        this.eError = true;
        console.log(error);
      }
    },
    checkUserName(data) {
      return data.length >= 6 && data.length <= 12;
    },
    checkEmail(data) {
      return data.includes("@" && ".com");
    },
    checkPassword(data) {
      let letter = /[a-zA-z]+/;
      let upper = /[A-Z]+/;
      let number = /[0-9]+/;
      let special = /[-+_!@#$%^&*., ?]+/;
      let str = letter.test(data) && number.test(data) && special.test(data);
      return data.length >= 6 && str;
    },
  },
};
</script>
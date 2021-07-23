<template>
  <div>
    <div class="h-100 bg-plum-plate bg-animation">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="text-center">
            <a href="index.html"
              ><img
                src="images/userpages/logo-white.png"
                alt=""
                width="170"
                height="52"
                class="mb-2"
            /></a>
          </div>
          <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
              <div class="modal-body">
                <div class="h5 modal-title text-center">
                  <h4 class="mt-2">
                    <span>Please sign in to your account below.</span>
                  </h4>
                </div>
                <v-form ref="validate" lazy-validation>
                  <b-row>
                    <b-col md="12">
                      <b-form-group>
                        <v-text-field
                          v-model="email"
                          :rules="rules.email"
                          label="Email"
                        ></v-text-field>
                      </b-form-group>
                    </b-col>
                    <b-col md="12">
                      <b-form-group>
                        <v-text-field
                          v-model="password"
                          :rules="rules.password"
                          type="password"
                          label="Password"
                        ></v-text-field>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <div class="divider" />
                  <div class="d-flex align-items-center">
                    <div class="ml-auto text-center">
                      <b-button
                        variant="primary"
                        class="futuraStd text-transform-none"
                        size="lg"
                        @click="Login"
                        >Login</b-button
                      >
                    </div>
                  </div>
                  <div class="text-center">
                    <a href="/home">Go to Home page</a>
                  </div>
                </v-form>
              </div>
            </div>
          </div>
          <div class="text-center text-white mt-3">
            <p class="rights text-white">
              <span>&copy;&nbsp;</span><span class="copyright-year"></span>
              <span>HLP Studio</span>. All rights reserved.
              <a href="privacy-policy.html"> Privacy Policy.</a>
            </p>
          </div>
        </b-col>
      </div>
    </div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      class="error-alert"
    >
      {{ errorValue }}
    </b-alert>
  </div>
</template>

<script>
import * as AuthService from "@/services/auth.service";
import * as StorageService from "@/services/storage.service";
import axios from "axios";

export default {
  components: {},
  data: () => ({
    slickOptions6: {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true,
    },

    slide: 0,
    sliding: null,
    email: "",
    password: "",
    dismissSecs: 10,
    dismissCountDown: 0,
    errorValue: "",
    rules: {
      email: [
        (v) => !!v || "Email is required!",
        (value) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "E-mail must be valid",
      ],
      password: [(v) => !!v || "Password is required!"],
    },
  }),

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    userRole() {
      if (this.$store.state.user) {
        return this.$store.state.user.role;
      } else {
        return null;
      }
    },
  },
  created() {
    if (this.authenticated) {
      if (this.userRole === "user") {
        this.$router.push({ name: "home" }).catch(() => {});
      } else {
        this.$router.push({ name: "chat" }).catch(() => {});
      }
    }
  },

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    Login() {
      var userinfo = StorageService.getStorage("userinfo");
      const returning = (res) => {
        this.$store.state.userinfo = userinfo;
        switch (res.data.role) {
          case "admin":
            this.$router.push({ name: "chat" }).catch(() => {});
            break;
          case "company":
            this.$router.push({ name: "chat" }).catch(() => {});
            break;
          default:
            this.$router.push({ name: "home" }).catch(() => {});
            break;
        }
      };
      if (this.$refs.validate.validate()) {
        AuthService.logIn({
          email: this.email,
          password: this.password,
        }).then((res) => {
          console.log(res, "login");
          if (res.status === 200) {
            StorageService.setStorage("token", res.data.accessToken);
            this.$store.state.authenticated = true;
            this.$store.state.user = {
              email: res.data.email,
              id: res.data.id,
              receiver: res.data.receiver,
              name: res.data.username,
              role: res.data.role,
              contactText: res.data.contactText,
            };
            if (!userinfo) {
              console.log("object");
              axios
                .get("http://ipinfo.io/json")
                .then((result) => {
                  StorageService.setStorage("userinfo", result.data);
                  userinfo = result.data;
                  returning(res);
                })
                .catch((e) => {
                  console.log(e);
                  returning(res);
                });
            } else {
              returning(res);
            }
          } else {
            console.log("object");
            this.errorValue = res.data.message;
            this.dismissCountDown = 5;
          }
        });
      }
    },

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.error-alert {
  position: absolute;
  top: 0;
  right: 0;
  background: #de5228;
  color: white;
  border-color: #d8ac2f;
  padding: 20px 30px;
  width: 300px;
}
</style>

<template>
  <div class="h-100">
    <b-row class="h-100 no-gutters">
      <b-col lg="7"  md="12" class="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
        <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
          
          <h4>
            <div>Welcome,</div>
            <span>
              It only takes a
              <span class="text-success">few seconds</span> to create your account
            </span>
          </h4>
          <div>
            <v-form ref="validate" lazy-validation>
              <b-row form>
                <b-col md="12">
                  <v-radio-group
                      v-model="role"
                      row
                    >
                    <v-radio
                      label="Company"
                      color="red"
                      value="company"
                    ></v-radio>
                    <!-- <v-radio
                      label="Admin"
                      color="red"
                      value="admin"
                    ></v-radio> -->
                  </v-radio-group>
                </b-col>
                <b-col md="6">
                  <b-form-group class="custom-input">
                    <v-text-field v-model="email" :rules="rules.email" label="E-mail"></v-text-field>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group class="custom-input">
                    <v-text-field v-model="name" :rules="rules.name" label="Name" ></v-text-field>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group class="custom-input">
                    <v-text-field v-model="password" ref="password1" :rules="rules.password" label="Password" required type="password"></v-text-field>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group class="custom-input">
                    <v-text-field v-model="confirmPwd" :rules="rules.confirmPwd.concat(passwordConfirmationRule)" label="ReEnter password" required type="password"></v-text-field>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-checkbox name="check" id="exampleCheck">
                Accept our
                <a href="javascript:void(0);">Terms and Conditions</a>.
              </b-form-checkbox>
              <div class="mt-4 d-flex align-items-center">
                <h5 class="mb-0">
                  Already have an account?
                  <a href="/login" class="text-primary">Sign in</a>
                </h5>
                <div class="ml-auto">
                  <b-button color="primary" class="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg" @click="Register">Create Account</b-button>
                </div>
              </div>
            </v-form>
          </div>
        </b-col>
      </b-col>
      <b-col lg="5" class="d-lg-flex d-xs-none">
        <div class="slider-light">
          <slick ref="slick" :options="slickOptions6">
            <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
              <div class="slider-content text-light">
                <h3>Perfect Balance</h3>
                <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified Vue Bootstrap Components and Elements.</p>
              </div>
            </div>
          </slick>
        </div>
      </b-col>
    </b-row>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="error-alert"
    >
    {{errorValue}}
    </b-alert>
  </div>
</template>
<script>
import Slick from "vue-slick";
import * as AuthService from '@/services/auth.service';
// import * as StorageService from '@/services/storage.service';

export default {
  components: {
    Slick
  },
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
      adaptiveHeight: true
    },
    email: '',
    name: '',
    password: '',
    confirmPwd: '',
    dismissSecs: 10000,
    dismissCountDown: 0,
    errorValue: '',
    rules: {
      name: [
        value => !!value || "Username is required",
        value => value.length >= 4 || "Username has 4- 15 charaters",
        value => value.length <= 15 || "Username has 4- 15 charaters"
      ],
      email: [
        value => !!value || 'Email is required',
        value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      ],
      password: [
        value => !!value || "Password is required.",
        value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value) || 'Min. 8 characters with at least one capital letter, a number and a special character.'
      ],
      confirmPwd: [
        value => !!value || "Password is required"
      ]
    },
    slide: 0,
    sliding: null,
    role: 'company'
  }),

  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPwd || "Password must match";
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

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
     countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    Register() {
      if (this.$refs.validate.validate()) {
        AuthService.register({
          username: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        }).then(res => {
          if(res.status === 200){
            // AuthService.logIn({
            //   email: this.email,
            //   password: this.password
            // }).then(res => {
            //   if(res.status === 200) {
            //     StorageService.setStorage('token', res.data.accessToken);
            //     this.$store.state.authenticated = true;
            //     this.$store.state.user = {
            //       email: res.data.email,
            //       id: res.data.id,
            //       name: res.data.username,
            //       role: res.data.role,
            //       receiver: res.data.receiver
            //     }
            //     this.$router.push({ name: 'calculator' }).catch(()=>{});
            //   } else {
            //     this.errorValue = res.data.message;
            //     this.dismissCountDown = 10
            //   }
            // })
            this.$router.push({ name: 'login' }).catch(()=>{});


          }else {
            console.log(res.data.message)
            this.errorValue = res.data.message
            this.dismissCountDown = 10
          }
        })
      }
    }
  }
};
</script>

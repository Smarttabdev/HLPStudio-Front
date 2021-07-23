<template>
  <div class="page">
    <!-- Breadcrumbs -->
    <section class="breadcrumbs-custom-inset">
      <div class="breadcrumbs-custom">
        <div class="container">
          <h1 class="breadcrumbs-custom-title">Contacts Us</h1>
          <ul class="breadcrumbs-custom-path">
            <li><a href="/home">Home</a></li>
            <li class="active">Contacts Us</li>
          </ul>
        </div>
        <div
          class="box-position"
          style="background-image: url(images/userpages/about-us-back.png)"
        ></div>
      </div>
    </section>
    <!-- Contact information-->
    <section class="section section-sm section-first bg-default">
      <div class="container">
        <div class="row row-30 justify-content-center">
          <div class="col-sm-8 col-md-6 col-lg-4">
            <article class="box-contacts">
              <div class="box-contacts-body">
                <div class="box-contacts-icon fl-bigmug-line-cellphone55"></div>
                <div class="box-contacts-decor"></div>
                <p class="box-contacts-link">
                  <a href="tel:#">+(374) 96 13 19 16</a>
                </p>
                <!-- <p class="box-contacts-link">
                  <a href="tel:#">+1 323-888-4554</a>
                </p> -->
              </div>
            </article>
          </div>
          <div class="col-sm-8 col-md-6 col-lg-4">
            <article class="box-contacts">
              <div class="box-contacts-body">
                <div class="box-contacts-icon fl-bigmug-line-up104"></div>
                <div class="box-contacts-decor"></div>
                <p class="box-contacts-link">
                  <a href="#">Armenia Yerevan Rubinyants 17/1 bld.</a>
                </p>
              </div>
            </article>
          </div>
          <div class="col-sm-8 col-md-6 col-lg-4">
            <article class="box-contacts">
              <div class="box-contacts-body">
                <div class="box-contacts-icon fl-bigmug-line-chat55"></div>
                <div class="box-contacts-decor"></div>
                <p class="box-contacts-link">
                  <a href="mailto:#">support@hlpstudio.net</a>
                </p>
                <!-- <p class="box-contacts-link"><a href="mailto:#">info@demolimk.org</a></p> -->
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form and Gmap-->
    <section class="section section-sm section-last bg-default text-md-left">
      <div class="container">
        <div class="row row-50">
          <div class="col-lg-6 section-map-small">
            <section class="section" id="contacts">
              <img src="images/userpages/after-1-570x453.jpg" alt="" />
            </section>
          </div>
          <div class="col-lg-6">
            <form
              class="rd-form rd-mailform"
              data-form-output="form-output-global"
              data-form-type="contact"
            >
              <div class="row row-14 gutters-14">
                <div class="col-sm-6">
                  <div class="form-wrap">
                    <input
                      class="form-input"
                      id="contact-first-name"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                    <label class="form-label" for="contact-first-name"
                      >First Name</label
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-wrap">
                    <input
                      class="form-input"
                      id="contact-last-name"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                    <label class="form-label" for="contact-last-name"
                      >Last Name</label
                    >
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-wrap">
                    <input
                      class="form-input"
                      id="contact-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label class="form-label" for="contact-email">E-mail</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-wrap">
                    <label class="form-label" for="contact-message"
                      >Message</label
                    >
                    <textarea
                      class="form-input"
                      id="contact-message"
                      name="message"
                      data-constraints="@Required"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                class="button button-primary button-pipaluk"
                @click="sendMail"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as UserService from "@/services/user.service";
// import axios from 'axios'

export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }),
  methods: {
    sendMail() {
      // console.log(this.name, this.email, this.message)
      UserService.sendEmail({
        firstName: this.name,
        lastName: "",
        email: this.email,
        message: this.message,
      }).then((res) => {
        console.log(res, "oh------------");
      });
    },
  },
};
</script>
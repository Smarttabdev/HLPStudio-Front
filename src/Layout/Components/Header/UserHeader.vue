<template>
  <header class="section page-header">
    <!-- RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav
        class="rd-navbar rd-navbar-classic bg-transparent"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-static"
        data-lg-device-layout="rd-navbar-fixed"
        data-xl-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-xxl-layout="rd-navbar-static"
        data-xxl-device-layout="rd-navbar-static"
        data-lg-stick-up-offset="46px"
        data-xl-stick-up-offset="46px"
        data-xxl-stick-up-offset="46px"
        data-lg-stick-up="true"
        data-xl-stick-up="true"
        data-xxl-stick-up="true"
      >
        <div class="rd-navbar-main-outer">
          <div class="rd-navbar-main">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->
              <button
                class="rd-navbar-toggle"
                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
              >
                <span></span>
              </button>
              <!-- RD Navbar Brand-->
              <div class="rd-navbar-brand">
                <a class="brand" href="/home"
                  ><img
                    src="images/userpages/logo-white.png"
                    alt=""
                    width="250"
                    height="52"
                /></a>
              </div>
            </div>
            <div class="rd-navbar-main-element position-relative">
              <div class=""></div>
              <div class="rd-navbar-nav-wrap">
                <!-- RD Navbar Search-->
                <div class="rd-navbar-search mt-2">
                  <button
                    class="rd-navbar-search-toggle"
                    data-rd-navbar-toggle=".rd-navbar-search"
                  >
                    <span></span>
                  </button>
                  <form
                    class="rd-search"
                    action="search-results.html"
                    data-search-live="rd-search-results-live"
                    method="GET"
                  >
                    <div class="form-wrap">
                      <label
                        class="form-label"
                        for="rd-navbar-search-form-input"
                        >Search...</label
                      >
                      <input
                        class="rd-navbar-search-form-input form-input"
                        id="rd-navbar-search-form-input"
                        type="text"
                        name="s"
                        autocomplete="off"
                      />
                      <div
                        class="rd-search-results-live"
                        id="rd-search-results-live"
                      ></div>
                    </div>
                    <button
                      class="rd-search-form-submit fl-bigmug-line-search74"
                      type="submit"
                    ></button>
                  </form>
                </div>
                <!-- RD Navbar Share-->
                <div class="rd-navbar-share">
                  <div
                    class="rd-navbar-share-icon fl-bigmug-line-share27"
                    data-rd-navbar-toggle=".rd-navbar-share-list"
                  ></div>
                  <ul class="list-inline rd-navbar-share-list border-radius-25">
                    <li class="rd-navbar-share-list-item">
                      <a
                        class="icon"
                        target="_blank"
                        href="https://www.linkedin.com/company/hlp-studio/"
                      >
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        class="icon"
                        target="_blank"
                        href="https://www.behance.net/hlpstudio13"
                      >
                        <font-awesome-icon :icon="['fab', 'behance']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        class="icon"
                        target="_blank"
                        href="https://dribbble.com/HLPStudio"
                      >
                        <font-awesome-icon :icon="['fab', 'dribbble']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        target="_blank"
                        class="icon"
                        href="https://www.freelancer.com/u/HLPAndranik"
                      >
                        <img
                          src="@/assets/images/userpages/freelancer.png"
                          class="social-img"
                          alt=""
                        />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        target="_blank"
                        class="icon"
                        href="https://www.upwork.com/freelancers/~01c352044b5b5f0722"
                      >
                        <img
                          src="@/assets/images/userpages/upwork.png"
                          alt=""
                          class="social-img"
                        />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a class="icon" target="_blank" href="#">
                        <font-awesome-icon :icon="['fab', 'fonticons-fi']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        class="icon"
                        target="_blank"
                        href="https://www.youtube.com/channel/UCosZ0UQdPrfvgkG1Q6CTtlg"
                      >
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a class="icon" target="_blank" href="#">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a class="icon" target="_blank" href="#">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        class="icon"
                        target="_blank"
                        href="https://www.pinterest.com/HLPStudio13"
                      >
                        <font-awesome-icon :icon="['fab', 'pinterest-p']" />
                      </a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a
                        class="icon"
                        target="_blank"
                        href="https://www.instagram.com/hlpstudio_net/"
                      >
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- RD Navbar Nav-->
                <ul class="rd-navbar-nav">
                  <li
                    :class="
                      $store.state.url === item.url
                        ? 'rd-nav-item active'
                        : 'rd-nav-item'
                    "
                    v-for="item in navitems"
                    :key="item.title"
                    @click="changeUrl(item.url)"
                  >
                    <a class="rd-nav-link fsize-2" :href="item.url">{{
                      item.title
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  data: () => ({
    navitems: [
      {
        title: "Home",
        url: "/home",
      },
      {
        title: "About Us",
        url: "/about-us",
      },
      {
        title: "Portfolio",
        url: "/portfolio",
      },
      {
        title: "Pricing",
        url: "/pricing",
      },
      {
        title: "Blog",
        url: "/blog",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
      },
    ],
    url: "/",
  }),
  mounted() {
    this.url = this.$store.state.url;
    console.log(this.url, "000");
  },
  methods: {
    changeUrl(url) {
      console.log(url, "0---------");
      this.url = url;
    },
  },
};
</script>

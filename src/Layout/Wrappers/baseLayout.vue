<template>
  <div class="app-container app-theme-white">
    <transition name="fade" mode="out-in" appear>
      <Header :headerbg="headercolor" />
    </transition>
    <transition name="fade" mode="out-in" appear>
      <Sidebar :sidebarbg="sidebarcolor" />
    </transition>
    <div class="app-main__outer">
      <div class="app-main__inner">
        <slot></slot>
      </div>
      <transition name="fade" mode="out-in" appear> </transition>
    </div>
  </div>
</template>

<script>
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
// import Footer from "../Components/Footer"
// import VuePerfectScrollbar from "vue-perfect-scrollbar"
import * as AuthService from "@/services/auth.service";
// import * as StorageService from '@/services/storage.service'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faCog);
export default {
  name: "app",
  components: {
    Header,
    Sidebar,
    // Footer,
    // VuePerfectScrollbar,
    // "font-awesome-icon": FontAwesomeIcon
  },
  methods: {
    toggleConfig(className) {
      const el = document.body;
      this.isConfigOpen = !this.isConfigOpen;

      if (this.isConfigOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    logout() {
      AuthService.logOut();
      this.$store.state.user = null;
      // this.$store.state.query = null
      this.$store.state.value = null;
      this.$store.state.authenticated = false;
      this.$router.push({ name: "home" }).catch(() => {});
    },
  },

  data() {
    return {
      headercolor: null,
      sidebarcolor: null,

      isConfigOpen: false,
      admin: "",

      colors: [
        "bg-primary text-lighter",
        "bg-secondary text-lighter",
        "bg-success text-lighter",
        "bg-info text-lighter",
        "bg-warning text-darker",
        "bg-danger text-lighter",
        "bg-light text-darker",
        "bg-dark text-lighter",
        "bg-focus text-lighter",
        "bg-alternate text-lighter",

        "bg-vicious-stance text-lighter",
        "bg-midnight-bloom text-lighter",
        "bg-night-sky text-lighter",
        "bg-slick-carbon text-lighter",
        "bg-asteroid text-lighter",
        "bg-royal text-lighter",
        "bg-warm-flame text-darker",
        "bg-night-fade text-darker",
        "bg-sunny-morning text-darker",
        "bg-tempting-azure text-darker",
        "bg-amy-crisp text-darker",
        "bg-heavy-rain text-darker",
        "bg-mean-fruit text-darker",
        "bg-malibu-beach text-darker",
        "bg-deep-blue text-darker",
        "bg-ripe-malin text-lighter",
        "bg-arielle-smile text-lighter",
        "bg-plum-plate text-lighter",
        "bg-happy-fisher text-darker",
        "bg-happy-itmeo text-darker",
        "bg-mixed-hopes text-lighter",
        "bg-strong-bliss text-lighter",
        "bg-grow-early text-lighter",
        "bg-love-kiss text-lighter",
        "bg-premium-dark text-lighter",
        "bg-happy-green text-lighter",
      ],
    };
  },
  mounted() {
    console.log("mounted!", this.$store.state.user);
    if (this.$store.state.user) {
      console.log(this.$store.state.user.role, "base");
      if (this.$store.state.user.role === "user") {
        this.logout();
      }
    } else {
      this.logout();
    }
  },
};
</script>

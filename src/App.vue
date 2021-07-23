<template>
    <div id="app">
        <component :is="layout">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </component>
    </div>
</template>

<script>
const default_layout = "apps";
import * as AuthService from '@/services/auth.service'
import * as StorageService from '@/services/storage.service'
import {  mapGetters } from 'vuex';



export default {
    computed: {
      ...mapGetters(['getUserData', 'getSocket']),
      layout() {
        this.getUrl();
        this.getUser();
        return (this.$route.meta.layout || default_layout) + "-layout";
      }
    },
    methods: {
        getUrl() {
            const fullPath = this.$route.fullPath;
            this.$store.state.url = fullPath;
        },
       
        logout() {
          AuthService.logOut()
          this.$store.state.user = null
          // this.$store.state.query = null
          this.$store.state.authenticated = false
        },
        async getUser() {
          const token = StorageService.getStorage('token')
          if(token) {
            const res = await AuthService.getUser()
              if(res.status === 200){
                this.$store.state.authenticated = true;
                this.$store.state.user = {
                  email: res.data.email,
                  id: res.data.id,
                  name: res.data.username,
                  role: res.data.role,
                }
              }else{
                this.logout()
                // this.$router.push({ name: 'calculator' }).catch(()=>{})
              }
          }else{
            this.logout()
            // this.$router.push({ name: 'calculator' }).catch(()=>{})
          }
        }
    },
    mounted() {
      let scriptM = document.createElement("script");
      scriptM.setAttribute("src", "/script.js");
      document.head.appendChild(scriptM);
    },
    beforeDestroy() {
      StorageService.setStorage('chatStatus', false)
      alert('hey!')
    }
};
</script>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
@import "assets/base.scss";
</style>

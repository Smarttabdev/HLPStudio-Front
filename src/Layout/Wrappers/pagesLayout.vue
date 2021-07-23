<template>
  <div class="app-container app-theme-white app-userpage" >
    <slot></slot>
  </div>
</template>

<script>
// import * as AuthService from '@/services/auth.service'
// import * as StorageService from '@/services/storage.service'

export default {
  name: "app",
  components: {},
  data() {
    return {
      admin: ''
    };
  },
  methods: {
    // logout() {
    //   AuthService.logOut()
    //   this.$store.state.user = null
    //   this.$store.state.query = null
    //   this.$store.state.value = null
    //   this.$store.state.authenticated = false
    //   this.$router.push({ name: 'login' }).catch(()=>{})
    // }
  },
  // mounted(){
  //   console.log('pages', this.$store.state.user)
  //   if(this.$store.state.user){
  //     if(this.$store.state.user.role!== 'user'){
  //       this.logout()
  //     }
  //   }
  // },
};
</script>

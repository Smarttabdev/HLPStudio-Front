<template>
  <div class="page">
    <user-header></user-header>
    <chat-box></chat-box>
    <slot></slot>
    <user-footer></user-footer>
  </div>
</template>

<script>
import UserHeader from '../Components/Header/UserHeader'
import UserFooter from '../Components/Footer/UserFooter'
import ChatBox from '../Components/Chat/ChatBox'


export default {
  name: "app",
  components: {
   UserHeader,
   UserFooter,
  ChatBox
  },
};
</script>

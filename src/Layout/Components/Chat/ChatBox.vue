<template>
  <div class="ui-theme-settings">
    <button
      type="button"
      class="btn-open-options btn text-white"
      v-bind:class="{ 'is-active': isConfigOpen }"
      @click="toggleConfig('settings-open')"
    >
      <font-awesome-icon :icon="['fas', 'comment-dots']" class="fsize-3" />
    </button>
    <div class="theme-settings__inner position-relative">
      <VuePerfectScrollbar
        class="scrollbar-container pt-5 mb-100p h-85"
        ref="scroll"
      >
        <div
          class="text-left bg-premium-dark fixed-top"
          style="border-top-left-radius: 10px; border-top-right-radius: 10px"
        >
          <img src="images/userpages/logo-white.png" class="w-100p ml-4 my-2" />
        </div>
        <div v-if="chatState">
          <div
            class="chat-wrapper font-size-md"
            style="font-family: 'Open Sans'"
            v-for="(content, index) in chatContents"
            :key="index"
          >
            <div v-if="content.state === 'receive'" class="chat-box-wrapper">
              <div>
                <div class="avatar-icon-wrapper mr-2">
                  <div class="avatar-icon avatar-icon-lg rounded">
                    <b-img src="images/user-8-118x118.jpg" alt></b-img>
                  </div>
                </div>
              </div>
              <div>
                <div class="chat-box bg-sunny-morning">
                  {{ content.content }}
                </div>
                <small class="opacity-6">
                  <font-awesome-icon icon="calendar-alt" />{{
                    formatDate(content.createdAt)
                  }}
                </small>
              </div>
            </div>
            <div v-if="content.state === 'send'" class="float-right">
              <div class="chat-box-wrapper chat-box-wrapper-right">
                <div>
                  <div class="chat-box bg-premium-dark text-white">
                    {{ content.content }}
                  </div>
                  <small class="opacity-6">
                    <font-awesome-icon icon="calendar-alt" />{{
                      formatDate(content.createdAt)
                    }}
                  </small>
                </div>
                <div>
                  <div class="avatar-icon-wrapper ml-1">
                    <div class="avatar-icon avatar-icon-lg rounded">Me</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-form class="mt-4" v-else ref="validateEmail" lazy-validation>
          <div
            class="chat-wrapper font-size-md"
            style="font-family: 'Open Sans'"
          >
            <div class="chat-box-wrapper">
              <div>
                <div class="avatar-icon-wrapper mr-2">
                  <div class="avatar-icon avatar-icon-lg rounded">
                    <b-img src="images/user-8-118x118.jpg" alt></b-img>
                  </div>
                </div>
              </div>
              <div>
                <div class="chat-box bg-sunny-morning">
                  Hi! <br />
                  It's Satenik from HLP Studio<br />
                  How can I help you?<br />
                  Please send to us your Email address
                </div>
                <small class="opacity-6">
                  <!-- <font-awesome-icon icon="calendar-alt" /> -->
                </small>
              </div>
            </div>
          </div>
          <div class="position-relative">
            <v-text-field
              v-model="email"
              class="w-70 ml-5"
              :rules="rule"
            ></v-text-field>
            <button
              @click="startChat"
              class="position-absolute"
              style="top: 24px; right: 30px"
            >
              <font-awesome-icon icon="paper-plane" />
            </button>
          </div>
        </v-form>
      </VuePerfectScrollbar>
      <div
        class="position-absolute chat-bottom bg-default pt-4"
        v-if="chatState"
      >
        <transition name="slideDown">
          <div
            class="
              chat__utyping
              position-absolute
              px-3
              fsize-1
              font-weight-black
            "
            style="top: 0"
            v-if="userTyping"
          >
            <span> Typing now...</span>
          </div>
        </transition>
        <b-form-input
          placeholder="input here message"
          v-model="sendText"
          @keydown.native="sending"
        ></b-form-input>
        <button @click="sendingMsg">
          <font-awesome-icon icon="paper-plane" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as ChatService from "@/services/chat.service";
import * as StorageService from "@/services/storage.service";
import moment from "moment";

import { mapGetters } from "vuex";
import axios from "axios";

library.add(faCog);

export default {
  name: "v-chat-box",
  components: {
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon,
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
    sending(e) {
      if (!this.chatState) return;
      if (this.sendText === "") return;
      if (e.which === 13) {
        this.chatContents = [
          ...this.chatContents,
          {
            index: this.chatContents.length,
            state: "send",
            content: this.sendText,
            time: new Date(),
          },
        ];
        this.sendMessage();
      } else {
        if (this.content !== "") {
          this.sendUserTyping();
        } else {
          this.sendUserNotTyping();
        }
      }
    },
    formatDate(date) {
      const date1 = new Date();
      const date2 = new Date(date);
      const Difference_In_Time = date2.getTime() - date1.getTime();
      const Difference_In_Days = Math.round(
        Difference_In_Time / (1000 * 3600 * 24)
      );
      switch (Difference_In_Days) {
        case 0:
          return moment(date).format("HH:MM A") + "|" + "Today";
        case 1:
          return moment(date).format("HH:MM A") + "|" + "Yesterday";
        default:
          return (
            moment(date).format("HH:MM A") +
            "|" +
            moment(date).format("dddd, MMMM DD, YYYY")
          );
      }
      // return moment(date).format('HH:MM A') + '|' + moment(date).format('YYYY-MM-DD')
    },
    sendingMsg() {
      if (!this.chatState) return;
      if (this.sendText === "") return;
      this.chatContents = [
        ...this.chatContents,
        {
          index: this.chatContents.length,
          state: "send",
          content: this.sendText,
          time: moment(new Date()).format("HH:MM"),
        },
      ];
      this.sendMessage();
    },
    sendUserTyping() {
      this.getSocket.emit("userTyping");
    },
    sendUserNotTyping() {
      this.getSocket.emit("removeUserTyping", {
        email: this.email,
      });
    },
    sendMessage() {
      this.getSocket.emit("newMessage", {
        user: this.$store.state.userinfo,
        email: this.email,
        content: this.sendText,
      });
      this.sendText = "";
      this.sendUserNotTyping();
      this.scrollTop();
    },
    startChat(e) {
      e.preventDefault();
      if (this.$refs.validateEmail.validate()) {
        var userinfo = StorageService.getStorage("userinfo");
        console.log(userinfo);
        if (!userinfo) {
          axios
            .get("http://ipinfo.io/json")
            .then((res) => {
              console.log("oh, yesssssssssss");
              userinfo = res.data;
              StorageService.setStorage("userinfo", res.data);
              this.$store.state.userinfo = userinfo;
              this.getSocket.emit("joined", {
                user: this.$store.state.userinfo,

                email: this.email,
                role: "user",
              });
              this.chatState = true;
              StorageService.setStorage("chatStatus", true);
              ChatService.getChatContents({ email: this.email }).then((res) => {
                this.chatContents = res.data.chatContents;
                this.scrollTop();
              });
            })
            .catch((e) => {
              console.log(e, "oh, no!!!!!!11111");
              this.getSocket.emit("joined", {
                user: null,
                email: this.email,
                role: "user",
              });
              this.chatState = true;
              StorageService.setStorage("chatStatus", true);
              ChatService.getChatContents({ email: this.email }).then((res) => {
                this.chatContents = res.data.chatContents;
                this.scrollTop();
              });
            });
        } else {
          this.chatState = true;
          this.getSocket.emit("joined", {
            user: userinfo,
            email: this.email,
            role: "user",
          });
          StorageService.setStorage("chatStatus", true);
          ChatService.getChatContents({ email: this.email }).then((res) => {
            this.chatContents = res.data.chatContents;
            this.scrollTop();
          });
        }
      }
    },
    scrollTop() {
      this.$nextTick(() => {
        this.$refs.scroll.$el.scrollTop = 9999999;
      });
    },
  },
  computed: {
    ...mapGetters(["getUserData", "getCurrentRoom", "getSocket"]),
  },

  data() {
    return {
      isConfigOpen: false,
      userTyping: false,
      chatContents: [],
      sendText: "",
      email: "",
      chatState: false,
      rule: [
        (v) => !!v || "Email is required!",
        (value) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "E-mail must be valid",
      ],
    };
  },
  mounted() {
    const chatStatus = StorageService.getStorage("chatStatus");
    //  const email = StorageService

    if (chatStatus) {
      this.chatState = true;
    }
    //  ChatService.getChatContents({email: this.email}).then(res => {
    //   this.chatContents = res.data.chatContents
    //   this.scrollTop()
    // })
  },
  created() {
    this.getSocket.on("receivedUserTyping", (data) => {
      console.log(data, "recivedUserTyping");
      this.userTyping = data.state;
      this.scrollTop();
    });
    this.getSocket.on("receivedNewMessage", (data) => {
      console.log("receiveNewMessage");
      this.chatContents.push(data.newMessage);
      this.scrollTop();
    });
  },
};
</script>

<template>
  <div class="col-sm-12 col-lg-12">
    <div class="app-inner-layout chat-layout">
      <div class="app-inner-layout__wrapper">
        <div class="app-inner-layout__sidebar card h-600p">
          <div class="app-inner-layout__sidebar-header">
            <ul class="nav flex-column">
              <li class="pt-4 pl-3 pr-3 pb-3 nav-item">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <!-- <font-awesome-icon icon="search" /> -->
                    </div>
                  </div>
                  <input
                    placeholder="Search..."
                    type="text"
                    class="form-control"
                  />
                </div>
              </li>
            </ul>
          </div>
          <VuePerfectScrollbar class="app-sidebar-scroll h-400p">
            <ul class="nav flex-column">
              <li
                class="nav-item"
                v-for="chatContact in chatContacts"
                :key="chatContact.index"
                @click="contactClick(chatContact)"
              >
                <button
                  type="button"
                  :tabindex="chatContact.index"
                  class="dropdown-item"
                >
                  <div class="widget-content p-0 position-relative">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="avatar-icon-wrapper">
                          <div
                            v-if="chatContact.socketId !== ''"
                            class="
                              badge badge-bottom
                              btn-shine
                              badge-success badge-dot badge-dot-lg
                            "
                          ></div>
                          <div
                            v-if="chatContact.socketId === ''"
                            class="
                              badge badge-bottom
                              btn-shine
                              badge-secondary badge-dot badge-dot-lg
                            "
                          ></div>
                          <div class="avatar-icon">
                            {{ chatContact.email }}
                          </div>
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">
                          {{ chatContact.email }}
                        </div>
                      </div>
                    </div>
                    <div
                      class="noti-message"
                      v-if="chatContact.unreadMessage !== 0"
                    >
                      {{
                        chatContact.unreadMessage > 99
                          ? "99+"
                          : chatContact.unreadMessage
                      }}
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </VuePerfectScrollbar>
        </div>
        <div class="app-inner-layout__content height-fit-content mb-2">
          <div
            class="
              table-responsive
              card
              w-100
              mr-2
              height-fit-content
              h-600p
              overflow-hidden
            "
          >
            <div
              class="app-inner-layout__top-pane border-bottom h-65p badge-info"
            >
              <div class="pane-left" v-if="selectedContact">
                <div class="mobile-app-menu-btn">
                  <button
                    type="button"
                    class="hamburger hamburger--elastic"
                    v-bind:class="{ 'is-active': isMobileOpen }"
                    @click="toggleLayoutClass('open-mobile-menu')"
                  >
                    <span class="hamburger-box">
                      <span class="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
                <div class="avatar-icon-wrapper mr-2">
                  <div
                    v-if="selectedContact.socketId !== ''"
                    class="
                      badge badge-bottom
                      btn-shine
                      badge-success badge-dot badge-dot-lg
                    "
                  ></div>
                  <div
                    v-if="selectedContact.socketId === ''"
                    class="
                      badge badge-bottom
                      btn-shine
                      badge-secondary badge-dot badge-dot-lg
                    "
                  ></div>
                  <div class="avatar-icon avatar-icon-xl rounded">
                    {{ selectedContact.email }}
                    {{ selectedContact.socketId }}
                  </div>
                </div>
                <h4 class="mb-0 text-nowrap text-transform-none">
                  {{ selectedContact.email }}
                  <div class="opacity-7">
                    {{ selectedContact.country }} {{ selectedContact.city }}
                  </div>
                </h4>
              </div>
            </div>
            <VuePerfectScrollbar class="app-sidebar-scroll h-480p" ref="scroll">
              <div v-if="selectedContact.chatContents">
                <div
                  class="chat-wrapper font-size-md"
                  style="font-family: 'Open Sans'"
                >
                  <template v-for="chatContent in selectedContact.chatContents">
                    <div
                      v-if="chatContent.state === 'send'"
                      class="chat-box-wrapper"
                      :key="chatContent.index"
                    >
                      <div>
                        <div class="avatar-icon-wrapper mr-2">
                          <div class="avatar-icon avatar-icon-lg rounded">
                            {{ selectedContact.email }}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="chat-box">
                          {{ chatContent.content }}
                        </div>
                        <small class="opacity-6">
                          <font-awesome-icon icon="calendar-alt" />{{
                            formatDate(chatContent.createdAt)
                          }}
                        </small>
                      </div>
                    </div>
                    <div :key="chatContent.index" class="w-100">
                      <div
                        v-if="chatContent.state === 'receive'"
                        class="flex justify-content-end"
                      >
                        <div class="chat-box-wrapper chat-box-wrapper-right">
                          <div>
                            <div class="chat-box">
                              {{ chatContent.content }}
                            </div>
                            <small class="opacity-6">
                              <font-awesome-icon icon="calendar-alt" />{{
                                formatDate(chatContent.createdAt)
                              }}
                            </small>
                          </div>
                          <div>
                            <div class="avatar-icon-wrapper ml-1">
                              <div class="avatar-icon avatar-icon-lg rounded">
                                Me
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </VuePerfectScrollbar>
            <div
              class="col-sm-12 position-absolute chat-bottom bg-default pt-4"
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
                  v-if="selectedContact.userTyping"
                >
                  <span> Typing now...</span>
                </div>
              </transition>
              <b-form-input
                placeholder="input here message"
                class="w-80"
                v-model="sendText"
                @keydown.native="sending"
              ></b-form-input>
              <button @click="sendingMsg">
                <font-awesome-icon icon="paper-plane" />
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import * as ChatService from "@/services/chat.service";

import moment from "moment";
import { mapGetters } from "vuex";

export default {
  components: {
    FontAwesomeIcon,
    VuePerfectScrollbar,
  },

  data: () => ({
    isMobileOpen: false,
    chatContacts: [],
    selectedContact: {},
    sendText: "",
  }),

  computed: {
    ...mapGetters(["getUserData", "getCurrentRoom", "getSocket"]),
  },

  methods: {
    toggleLayoutClass(className) {
      const el = document.body;
      this.isMobileOpen = !this.isMobileOpen;

      if (this.isMobileOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    getImgUrl(pet) {
      var images = require.context("@/assets/images/avatars/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    contactClick(info) {
      const el = document.body;
      el.classList.remove("open-mobile-menu");
      this.isMobileOpen = false;
      this.selectedContact = this.chatContacts.filter(
        (val) => val.id === info.id
      )[0];
      this.selectedContact.unreadMessage = 0;
      this.scrollTop();
      this.getSocket.emit("joined", {
        user: this.$store.state.userinfo,
        email: this.email,
        role: "admin",
        toUserId: this.selectedContact.id,
      });
    },
    formatDate(date) {
      const date1 = new Date();
      const date2 = new Date(date);
      const Difference_In_Time = date2.getTime() - date1.getTime();
      const Difference_In_Days = Math.round(
        Difference_In_Time / (1000 * 3600 * 24)
      );
      console.log(Difference_In_Days);
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
    sending(e) {
      if (this.sendText === "") return;
      if (e.which === 13) {
        this.selectedContact.chatContents = [
          ...this.selectedContact.chatContents,
          {
            // index: this.chatContents.length,
            state: "receive",
            content: this.sendText,
            createdAt: new Date(),
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
    sendingMsg() {
      if (!this.chatState) return;
      if (this.sendText === "") return;
      this.chatContents = [
        ...this.chatContents,
        {
          index: this.chatContents.length,
          state: "receive",
          content: this.sendText,
          createdAt: new Date(),
        },
      ];
      this.sendMessage();
    },
    sendUserTyping() {
      this.getSocket.emit("userTyping", {
        chatuserId: this.selectedContact.id,
      });
    },
    sendUserNotTyping() {
      this.getSocket.emit("removeUserTyping", {
        chatuserId: this.selectedContact.id,
      });
    },
    scrollTop() {
      this.$nextTick(function () {
        this.$refs.scroll.$el.scrollTop = 9999999;
      });
    },
    sendMessage() {
      this.getSocket.emit("newMessage", {
        user: this.$store.state.userinfo,
        email: this.email,
        content: this.sendText,
        chatuserId: this.selectedContact.id,
      });
      this.sendText = "";
      this.sendUserNotTyping();
      this.scrollTop();
    },
  },
  beforeMount() {
    ChatService.getChatContacts().then((res) => {
      this.chatContacts = res.data.chatContacts;
      this.selectedContact = this.chatContacts[0];

      this.getSocket.emit("joined", {
        user: this.$store.state.userinfo,
        email: this.email,
        role: "admin",
        toUserId: this.selectedContact.id,
      });
    });
  },
  created() {
    this.getSocket.on("receivedUserTyping", (data) => {
      console.log(data, "receivedUserTyping");
      let index = this.chatContacts.findIndex(
        (val) => val.id === data.currentUserId
      );
      this.chatContacts[index].userTyping = data.state;

      this.scrollTop();
    });

    this.getSocket.on("joined", (data) => {
      console.log(data, "joined");
      if (data.state) {
        let index = this.chatContacts.findIndex(
          (val) => val.id === data.currentUserinfo.id
        );
        console.log(index);
        if (index === -1) {
          this.chatContacts.push(data.currentUserinfo);
        } else {
          this.chatContacts[index].socketId = data.currentUserinfo.socketId;
        }
      }
    });

    this.getSocket.on("receivedNewMessage", (data) => {
      console.log(data, "receivedNewMessage");
      let index = this.chatContacts.findIndex(
        (val) => val.id === data.newMessage.chatuserId
      );
      let item = this.chatContacts[index];
      item.chatContents.push(data.newMessage);
      // console.log(item, '000000000')
      if (this.selectedContact.id !== data.currentUserId) {
        item.unreadMessage = item.unreadMessage + 1;
      }
      this.scrollTop();
    });
  },
};
</script>
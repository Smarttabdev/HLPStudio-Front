<template>
  <div class="d-flex">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          
          <!-- <div class="widget-content-left">
            <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" no-caret right>
              <span slot="button-content">
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                  <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                </div>
              </span>
              <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner bg-info">
                  <div class="menu-header-image opacity-2 dd-header-bg-6"></div>
                  <div class="menu-header-content text-left">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Alina Mcloughlin</div>
                          <div class="widget-subheading opacity-8">A short profile description</div>
                        </div>
                        <div class="widget-content-right mr-2">
                          <button class="btn-pill btn-shadow btn-shine btn btn-focus">Logout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scroll-area-xs" style="height: 150px;">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <ul class="nav flex-column">
                    <li class="nav-item-header nav-item">Activity</li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        Chat
                        <div class="ml-auto badge badge-pill badge-info">8</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">Recover Password</a>
                    </li>
                    <li class="nav-item-header nav-item">My Account</li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        Settings
                        <div class="ml-auto badge badge-success">New</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        Messages
                        <div class="ml-auto badge badge-warning">512</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">Logs</a>
                    </li>
                  </ul>
                </VuePerfectScrollbar>
              </div>
              <ul class="nav flex-column">
                <li class="nav-item-divider mb-0 nav-item"></li>
              </ul>
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                      <i class="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2"></i>Message Inbox
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                      <i class="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2"></i>
                      <b>Support Tickets</b>
                    </button>
                  </div>
                </div>
              </div>
              <ul class="nav flex-column">
                <li class="nav-item-divider nav-item"></li>
                <li class="nav-item-btn text-center nav-item">
                  <button class="btn-wide btn btn-primary btn-sm">Open Messages</button>
                </li>
              </ul>
            </b-dropdown>
          </div> -->
           <b-button variant="danger" class="ml-3" @click="logout"><i class="pe-7s-next-2"></i> Logout</b-button>

          <!-- <div class="widget-content-left ml-3 header-user-info">
            <div class="widget-heading">Alina Mclourd</div>
            <div class="widget-subheading">VP People Manager</div>
          </div>
          <div class="widget-content-right header-user-info ml-3">
            <b-btn v-b-tooltip.hover title="Tooltip Example"
              class="btn-shadow p-1" size="sm" variant="info">
              <font-awesome-icon icon="calendar-alt" class="mr-1 ml-1" />
            </b-btn>
          </div> -->
        </div>
      </div>
      
    </div>
 <div class="app-drawer-wrapper" v-bind:class="{ 'drawer-open': showDrawerSection }">
      <div class="drawer-nav-btn">
        <button type="button" class="hamburger hamburger--elastic"
          v-bind:class="{ 'is-active': showDrawerSection }" v-on:click="showDrawerSection = !showDrawerSection">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div class="drawer-content-wrapper">
       
      </div>
    </div>
  </div>
</template>

<script>
import * as AuthService from '@/services/auth.service'; 
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faCalendarAlt,
  faTrashAlt,
  faCheck,
  faFileAlt,
  faCloudDownloadAlt,
  faFileExcel,
  faFilePdf,
  faFileArchive,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAngleDown,
  faCalendarAlt,
  faTrashAlt,
  faCheck,
  faFileAlt,
  faCloudDownloadAlt,
  faFileExcel,
  faFilePdf,  
  faFileArchive,
  faEllipsisH
);

export default {
  components: {
    // "font-awesome-icon": FontAwesomeIcon,
  },
  data: () => ({
    showDrawerSection: false

  }),

  methods: {
    logout() {
        AuthService.logOut()
      this.$store.state.user = null;
      this.$store.state.authenticated = false;
      this.$router.push({ name: 'login' }).catch(()=>{})
    }
  }
};
</script>

<template>
  <section class="section section-sm section-fluid bg-default text-center">
    <VuePerfectScrollbar class="scrollbar-container" style="height: 400px">
      <div class="container-fluid isotope-wrap">
        <div class="isotope-filters isotope-filters-horizontal">
          <button
            class="
              isotope-filters-toggle
              button
              button-md
              button-icon
              button-icon-right
              button-default-outline
              button-wapasha
            "
            data-custom-toggle="#isotope-3"
            data-custom-toggle-hide-on-blur="true"
            data-custom-toggle-disable-on-blur="true"
          >
            <span class="icon fa fa-caret-down"></span>Filter
          </button>
          <ul class="isotope-filters-list" id="isotope-3">
            <li
              class="futuraStd font-weight-bold text-dark"
              v-for="item in filterItems"
              :key="item.title"
              @click="filter(item.title)"
            >
              <a
                :class="filterItem === item.title ? 'active' : ''"
                style="cursor: pointer"
                >{{ item.title }}</a
              >
            </li>
          </ul>
        </div>
        <transition-group
          name="list-complete"
          class="list-complete mt-5"
          tag="section"
        >
          <b-col
            md="4"
            xl="3"
            lg="3"
            sm="6"
            cols="12"
            class="owl-item m-0 p-0 pt-3"
            v-for="project in projects"
            :key="project.id"
            style="transition: transform 1.5s ease-out, opacity 0.5s ease-in"
          >
            <article class="thumbnail thumbnail-mary m-0">
              <div class="thumbnail-mary-figure">
                <div class="zoomin frame">
                  <img :src="project.img" alt="" width="420" height="308" />
                </div>
              </div>
              <div class="thumbnail-mary-caption">
                <a
                  class="icon fl-bigmug-line-zoom60"
                  :href="project.img"
                  data-lightgallery="item"
                  ><img :src="project.img" alt="" width="420" height="308"
                /></a>
              </div>
            </article>
          </b-col>
        </transition-group>
      </div>
    </VuePerfectScrollbar>
  </section>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar,
  },
  data: () => ({
    filterItems: [
      {
        title: "All",
        filter: "*",
      },
      {
        title: "Product",
        filter: "Type 1",
      },
      {
        title: "Exterior",
        filter: "Type 2",
      },
      {
        title: "Interior",
        filter: "Type 3",
      },
      {
        title: "AR/VR",
        filter: "Type 4",
      },
      {
        title: "Clo3D",
        filter: "Type 3",
      },
      {
        title: "Animation",
        filter: "Type 2",
      },
    ],
    projects: [
      {
        id: 3,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "AR/VR",
      },
      {
        id: 2,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Product",
      },
      {
        id: 1,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Exterior",
      },
      {
        id: 4,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Interior",
      },
      {
        id: 5,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "AR/VR",
      },
      {
        id: 6,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Clo3D",
      },
      {
        id: 7,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Animation",
      },
      {
        id: 8,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Animation",
      },
      {
        id: 9,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Interior",
      },
      {
        id: 10,
        img: "images/userpages/aboutus-timeline1.png",
        filter: "Interior",
      },
    ],
    filterItem: "All",
    tempItems: [],
  }),
  methods: {
    filter(item) {
      console.log(item);
      this.filterItem = item;
      if (item === "All") {
        this.projects = this.tempItems;
      } else {
        this.projects = this.tempItems.filter((val) => val.filter === item);
      }
    },
  },
  mounted() {
    this.tempItems = this.projects;
  },
};
</script>
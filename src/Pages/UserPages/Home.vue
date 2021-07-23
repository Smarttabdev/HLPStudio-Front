<template>
  <div>
    <!-- Slider -->
    <section
      class="section swiper-container swiper-slider swiper-slider-classic"
      data-loop="true"
      data-swiper='{"loop":true,"autoplay":{"delay":5000},"effect":"slide","simulateTouch":true,"direction":"vertical","nav":false}'
    >
      <div class="swiper-wrapper text-center">
        <div class="swiper-slide" data-slide-bg="images/userpages/slide1.jpg">
          <div class="swiper-slide-caption section-md">
            <div class="container">
              <h1
                data-caption-animate="fadeInLeft"
                data-caption-delay="0"
                class="font-weight-bold text-white"
              >
                Make your dreams 3D
              </h1>
              <a
                class="button button-primary button-ujarak futuraStd"
                href="#"
                target="_blank"
                data-caption-animate="fadeInUp"
                data-caption-delay="200"
                >Get in touch</a
              >
            </div>
          </div>
        </div>
        <div class="swiper-slide" data-slide-bg="images/userpages/slide2.jpg">
          <div class="swiper-slide-caption section-md">
            <div class="container">
              <h1
                data-caption-animate="fadeInLeft"
                data-caption-delay="0"
                class="text-white font-weight-bold"
              >
                We can help you bring your ideas to life
              </h1>
              <a
                class="button button-primary button-ujarak futuraStd"
                href="#"
                target="_blank"
                data-caption-animate="fadeInUp"
                data-caption-delay="200"
                >Get in touch</a
              >
            </div>
          </div>
        </div>
        <div class="swiper-slide" data-slide-bg="images/userpages/slide3.jpg">
          <div class="swiper-slide-caption section-md">
            <div class="container">
              <h1
                class="text-white font-weight-bold"
                data-caption-animate="fadeInLeft"
                data-caption-delay="0"
              >
                Welcome on HLPStudio
              </h1>
              <a
                class="button button-primary button-ujarak futuraStd"
                href="#"
                target="_blank"
                data-caption-animate="fadeInUp"
                data-caption-delay="200"
                >Get in touch</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Swiper Pagination-->
      <div class="swiper-pagination__module">
        <div class="swiper-pagination__fraction">
          <span class="swiper-pagination__fraction-index">00</span
          ><span class="swiper-pagination__fraction-divider">/</span
          ><span class="swiper-pagination__fraction-count">00</span>
        </div>
        <div class="swiper-pagination__divider"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!-- See all services-->
    <section class="section section-sm section-first bg-default text-center">
      <div class="container">
        <div class="row row-30 justify-content-center">
          <div class="col-sm-10 col-md-6 col-xl-3 col-lg-3 wow fadeInRight">
            <article class="box-icon-modern box-icon-modern-custom px-5">
              <div>
                <h3 class="box-icon-modern-big-title font-weight-bold">
                  See all services
                </h3>
                <div class="box-icon-modern-decor"></div>
                <a
                  class="
                    button
                    cursor-pointer
                    px-5
                    py-3
                    mt-3
                    fsize-1
                    button-primary button-ujarak
                    futuraStd
                    text-white
                  "
                  style="top: -10px"
                  >ALL SERVICES</a
                >
              </div>
            </article>
          </div>
          <div
            class="
              col-sm-10 col-md-6 col-xl-3 col-lg-3 col-xl-3
              wow
              fadeInRight
            "
            data-wow-delay=".1s"
            v-for="service in services"
            :key="service.text"
          >
            <article class="box-icon-modern box-icon-modern-2">
              <div class="box-icon-modern-icon">
                <img :src="service.img" alt="" />
              </div>
              <h5 class="box-icon-modern-title font-weight-bold fsize-3">
                <a class="cursor-pointer hover-color">{{ service.text }}</a>
              </h5>
              <div class="box-icon-modern-decor"></div>
              <p class="box-icon-modern-text fsize-2">
                {{ service.description }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology and Software -->
    <section class="section section-sm section-fluid bg-gray-100 text-center">
      <div class="container-fluid isotope-wrap">
        <h2 class="wow fadeInLeft font-weight-black">
          Technology And Software
        </h2>
      </div>
      <div class="technology-mark mt-5 px-5 mx-5">
        <div v-for="tech in techs" :key="tech.img">
          <img :src="tech.img" style="height: 40px" />
        </div>
      </div>
    </section>

    <!-- Latest Projects-->
    <section class="section section-sm section-fluid bg-default text-center">
      <div class="container-fluid isotope-wrap">
        <h2 class="wow fadeInLeft font-weight-black">Latest Projects</h2>
        <p class="quote-jean wow fadeInRight fsize-2" data-wow-delay=".1s">
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </p>
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
    </section>

    <!-- Years of experience-->
    <section class="section section-sm bg-default">
      <div class="container">
        <div
          class="
            row row-30 row-xl-24
            justify-content-center
            align-items-center align-items-lg-start
            text-left
          "
        >
          <div class="col-md-6 col-lg-5 col-xl-3 text-center">
            <a class="text-img" href="/about-us">
              <div id="particles-js"></div>
              <span class="">5</span></a
            >
          </div>
          <div class="col-sm-8 col-md-6 col-lg-5 col-xl-3 px-1">
            <div class="text-width-extra-small offset-top-lg-24 wow fadeInUp">
              <h3 class="title-decoration-lines-left font-weight-bold">
                Years of Experience
              </h3>
              <p class="font-weight-bold fsize-2">
                HLP Studio is a team of highly experienced 2D and 3D design
                creating new ideas for you.
              </p>
              <a
                class="button button-secondary button-pipaluk futuraStd"
                href="/about-us"
                target="_blank"
                >Get in touch</a
              >
            </div>
          </div>
          <div
            class="col-sm-10 col-md-9 col-lg-6 col-xl-4 wow fadeInRight px-1"
            data-wow-delay=".1s"
          >
            <div
              class="
                row
                justify-content-center
                border-2-column
                offset-top-xl-26
              "
            >
              <div
                class="col-9 col-sm-6"
                v-for="item in experiences"
                :key="item.title"
              >
                <div class="counter-amy">
                  <div class="counter-amy-number">
                    <span class="counter">{{ item.number }}</span>
                  </div>
                  <h6 class="counter-amy-title font-weight-black mt-2">
                    {{ item.title }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- client logos -->
    <section class="section section-md w-80 m-auto position-relative">
      <div
        class="
          col-lg-12 col-xl-12
          align-self-center
          client-logos
          bg-default
          p-5
        "
      >
        <carousel
          :per-page="carouselCount"
          :pagination-enabled="false"
          :navigation-enabled="true"
        >
          <slide v-for="logo in experiencelogos" :key="logo.img">
            <a class="clients-classic" :href="logo.href"
              ><img :src="logo.img" alt=""
            /></a>
          </slide>
        </carousel>
      </div>
      <!-- <carousel :per-page="2">
        <div v-for="logo in experiencelogos" :key="logo.img">
          <slide>
            <a class="clients-classic" :href="logo.href"
              ><img :src="logo.img" alt=""
            /></a>
          </slide>
        </div>
      </carousel> -->
    </section>

    <!-- Meet the team -->
    <section class="section section-sm section-fluid bg-default team-back">
      <div class="container-fluid">
        <h2 class="font-weight-bold text-white" style="margin-top: 100px">
          Meet The Team
        </h2>
        <div class="row row-sm row-30 justify-content-center">
          <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
            <!-- Team Classic-->
            <article class="team-classic team-classic-lg">
              <a class="team-classic-figure" href="#"
                ><img
                  src="images/userpages/Andranik-1.jpg"
                  alt=""
                  width="420"
                  height="424"
              /></a>
              <div class="team-classic-caption">
                <h4 class="team-classic-name">
                  <a href="#">Andranik</a>
                </h4>
                <p class="team-classic-status">CEO</p>
              </div>
            </article>
          </div>
          <div class="col-md-12 col-lg-1 col-xl-1"></div>
          <div
            class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight"
            data-wow-delay=".1s"
          >
            <!-- Team Classic-->
            <article class="team-classic team-classic-lg">
              <a class="team-classic-figure" href="#"
                ><img
                  src="images/userpages/Tatevilk-1.jpg"
                  alt=""
                  width="420"
                  height="424"
              /></a>
              <div class="team-classic-caption">
                <h4 class="team-classic-name">
                  <a href="#">Tatevik</a>
                </h4>
                <p class="team-classic-status">Director of Production</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- What people Say-->
    <section
      class="section section-sm section-bottom-70 section-fluid bg-default"
    >
      <div class="container-fluid container">
        <h2 class="font-weight-bold">What people Say</h2>
        <div class="row row-50 row-sm">
          <div class="col-md-6 col-xl-3 wow fadeInRight">
            <!-- Quote Modern-->
            <article class="quote-modern quote-modern-custom">
              <div class="unit unit-spacing-md align-items-center">
                <div class="unit-left">
                  <a class="quote-modern-figure" href="#"
                    ><img
                      class="img-circles"
                      src="images/userpages/1-Pierre.png"
                      alt=""
                      width="75"
                      height="75"
                  /></a>
                </div>
                <div class="unit-body">
                  <h4 class="quote-modern-cite">
                    <a href="#" class="font-weight-bold">Pierre</a>
                  </h4>
                  <p class="quote-modern-status font-weight-bold">
                    Regular client
                  </p>
                </div>
              </div>
              <div class="quote-modern-text">
                <p class="q font-weight-bold">
                  DreamSoft offers a high caliber of resources skilled in
                  Microsoft Azure .NET, mobile and Quality Assurance. They
                  became our true business partners over the past three years.
                </p>
              </div>
            </article>
          </div>
          <div class="col-md-6 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
            <!-- Quote Modern-->
            <article class="quote-modern quote-modern-custom">
              <div class="unit unit-spacing-md align-items-center">
                <div class="unit-left">
                  <a class="quote-modern-figure" href="#"
                    ><img
                      class="img-circles"
                      src="images/userpages/2-manuel.png"
                      alt=""
                      width="75"
                      height="75"
                  /></a>
                </div>
                <div class="unit-body">
                  <h4 class="quote-modern-cite">
                    <a href="#" class="font-weight-bold">Manuel</a>
                  </h4>
                  <p class="quote-modern-status font-weight-bold">
                    Regular client
                  </p>
                </div>
              </div>
              <div class="quote-modern-text">
                <p class="q font-weight-bold">
                  DreamSoft powered us with a competent team to develop products
                  for banking services. The team has been delivering results
                  within budget and time, which is amazing.
                </p>
              </div>
            </article>
          </div>
          <div class="col-md-6 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
            <!-- Quote Modern-->
            <article class="quote-modern quote-modern-custom">
              <div class="unit unit-spacing-md align-items-center">
                <div class="unit-left">
                  <a class="quote-modern-figure" href="#"
                    ><img
                      class="img-circles"
                      src="images/userpages/3-Greg.png"
                      alt=""
                      width="75"
                      height="75"
                  /></a>
                </div>
                <div class="unit-body">
                  <h4 class="quote-modern-cite">
                    <a href="#" class="font-weight-bold">Greg</a>
                  </h4>
                  <p class="quote-modern-status font-weight-bold">
                    Regular client
                  </p>
                </div>
              </div>
              <div class="quote-modern-text">
                <p class="q font-weight-bold">
                  DreamSoft is a highly skilled and uniquely capable firm with
                  multitudes of talent on-board. We have collaborated on a
                  number of diverse projects that have been a great success.
                </p>
              </div>
            </article>
          </div>
          <div class="col-md-6 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
            <!-- Quote Modern-->
            <article class="quote-modern quote-modern-custom">
              <div class="unit unit-spacing-md align-items-center">
                <div class="unit-left">
                  <a class="quote-modern-figure" href="#"
                    ><img
                      class="img-circles"
                      src="images/userpages/4-abbas.png"
                      alt=""
                      width="75"
                      height="75"
                  /></a>
                </div>
                <div class="unit-body">
                  <h4 class="quote-modern-cite">
                    <a href="#" class="font-weight-bold">Abbas</a>
                  </h4>
                  <p class="quote-modern-status font-weight-bold">
                    Regular client
                  </p>
                </div>
              </div>
              <div class="quote-modern-text">
                <p class="q font-weight-bold">
                  DreamSoft is a highly skilled and uniquely capable firm with
                  multitudes of talent on-board. We have collaborated on a
                  number of diverse projects that have been a great success.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest blog posts-->
    <section class="section section-sm section-last bg-default">
      <div class="container">
        <h2 class="font-weight-bold">Latest blog posts</h2>
        <div class="row row-60 row-sm">
          <div class="col-sm-6 col-lg-4 wow fadeInLeft">
            <!-- Post Modern-->
            <article class="post post-modern">
              <a class="post-modern-figure" href="/blog"
                ><img
                  src="images/post-10-370x307.jpg"
                  alt=""
                  width="370"
                  height="307"
                />
                <div class="post-modern-time">
                  <time datetime="2019-07-04"
                    ><span class="post-modern-time-month">07</span
                    ><span class="post-modern-time-number">04</span></time
                  >
                </div></a
              >
              <h4 class="post-modern-title">
                <a href="blog-post.html">Benefits Of Async/Await</a>
              </h4>
              <p class="post-modern-text">
                Asynchronous functions are a good and bad thing in JavaScript.
                The good side is that asynchronous functions are non-blocking
                and…
              </p>
            </article>
          </div>
          <div class="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay=".1s">
            <!-- Post Modern-->
            <article class="post post-modern">
              <a class="post-modern-figure" href="/blog"
                ><img
                  src="images/post-11-370x307.jpg"
                  alt=""
                  width="370"
                  height="307"
                />
                <div class="post-modern-time">
                  <time datetime="2019-07-17"
                    ><span class="post-modern-time-month">07</span
                    ><span class="post-modern-time-number">17</span></time
                  >
                </div></a
              >
              <h4 class="post-modern-title">
                <a href="/blog">Key Considerations Of iPaaS</a>
              </h4>
              <p class="post-modern-text">
                Digital transformation requires cloud appropriate adoption,
                legacy IT systems modernization, and Agile-based methodologies
                for faster…
              </p>
            </article>
          </div>
          <div class="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
            <!-- Post Modern-->
            <article class="post post-modern">
              <a class="post-modern-figure" href="/blog"
                ><img
                  src="images/post-12-370x307.jpg"
                  alt=""
                  width="370"
                  height="307"
                />
                <div class="post-modern-time">
                  <time datetime="2019-07-22"
                    ><span class="post-modern-time-month">07</span
                    ><span class="post-modern-time-number">22</span></time
                  >
                </div></a
              >
              <h4 class="post-modern-title">
                <a href="/blog">Hibernate Query Language</a>
              </h4>
              <p class="post-modern-text">
                In this tutorial, we will discuss the Hibernate Query Language.
                HQL is an object-oriented query language. Hibernate Query...
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    techs: [
      {
        img: "images/userpages/autodesk.png",
      },
      {
        img: "images/userpages/vray.png",
      },
      {
        img: "images/userpages/solidworks.png",
      },
      {
        img: "images/userpages/unity-logo.png",
      },
      {
        img: "images/userpages/clo.png",
      },
      {
        img: "images/userpages/adobe.png",
      },
      {
        img: "images/userpages/lumion.png",
      },
      {
        img: "images/userpages/sketchup.png",
      },
    ],
    services: [
      {
        img: "images/userpages/3d-icon.png",
        text: "Product design",
        description:
          "Although mainly focused on product design, also cover graphic design, 3D modeling and visualization, conceptual design",
      },
      {
        img: "images/userpages/exterior-icon.png",
        text: "Architecture",
        description:
          "We have extensive experience CAD modeling and renderings using Autocad, 3Ds max, Sketchup and Revit from small to large projects.",
      },
      {
        img: "images/userpages/ar-icon.png",
        text: "AR/VR",
        description:
          "Create photorealistic and stylized art with a passion for immersive content - VR and 360 animation, product and event renders, and storytelling",
      },
    ],
    filterItem: "All",
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
    tempItems: [],
    experiences: [
      {
        title: "completed",
        number: "107",
      },
      {
        title: "clients",
        number: "40",
      },
      {
        title: "awards",
        number: "4",
      },
      {
        title: "team members",
        number: "24",
      },
    ],
    experiencelogos: [
      { img: "images/userpages/hkc.png", href: "#" },
      { img: "images/userpages/prominece.png", href: "#" },
      { img: "images/userpages/econcept.png", href: "#" },
      { img: "images/userpages/inxcite.png", href: "#" },
    ],
    galleries: [
      {
        img: "aboutus-timeline1",
      },
    ],
    histories: [
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.6",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.7",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.8",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.9",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.10",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.11",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2020.12",
        description: "Architecture Interior Visualization",
      },
      {
        img: "images/userpages/aboutus-timeline1.png",
        title: "2021.1",
        description: "Architecture Interior Visualization",
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
    carouselCount: 4,
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
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  mounted() {
    // let coreScript = document.createElement('script')
    //   coreScript.setAttribute('src', '/core.min.js')
    //   document.head.appendChild(coreScript)
    this.tempItems = this.projects;
    window.onresize = () => {
      if (window.innerWidth > 992) {
        this.carouselCount = 4;
      } else {
        if (window.innerWidth > 540) {
          this.carouselCount = 2;
        } else {
          this.carouselCount = 1;
        }
      }
    };
  },
};
</script>

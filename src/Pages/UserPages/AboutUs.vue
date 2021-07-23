<template>
  <div class="page">
    <!-- Breadcrumbs -->
    <section class="breadcrumbs-custom-inset">
      <div class="breadcrumbs-custom">
        <div class="container">
          <h1 class="breadcrumbs-custom-title">About Us</h1>
          <ul class="breadcrumbs-custom-path">
            <li><a href="/home">Home</a></li>
            <li class="active">About Us</li>
          </ul>
        </div>
        <div
          class="box-position"
          style="background-image: url(images/userpages/about-us-back.png)"
        ></div>
      </div>
    </section>

    <!-- Latest Projects-->
    <section class="section section-sm section-fluid bg-default">
      <div class="container">
        <h2 class="font-weight-bold">History Timeline</h2>
      </div>
      <!-- Owl Carousel-->
      <div
        class="owl-carousel owl-classic owl-timeline"
        data-items="1"
        data-md-items="2"
        data-lg-items="3"
        data-xl-items="4"
        data-margin="30"
        data-autoplay="true"
        data-nav="true"
        data-dots="true"
      >
        <div class="owl-item" v-for="history in histories" :key="history.title">
          <!-- Thumbnail Classic-->
          <article class="thumbnail thumbnail-mary thumbnail-md about-us">
            <div class="thumbnail-mary-figure">
              <img :src="history.img" alt="" width="420" height="308" />
            </div>
            <div class="thumbnail-mary-caption">
              <a
                class="icon fl-bigmug-line-zoom60"
                href="images/userpages/aboutus-timeline1.png"
                data-lightgallery="item"
                ><img
                  src="images/timeline-1-420x308.jpg"
                  alt=""
                  width="420"
                  height="308"
              /></a>
            </div>
          </article>
          <div class="thumbnail-mary-description">
            <h4 class="thumbnail-mary-project">
              <a href="#">{{ history.description }}</a>
            </h4>
            <span class="thumbnail-mary-decor"></span>
            <h5 class="thumbnail-mary-time">
              <time datetime="2008">{{ history.title }}</time>
            </h5>
          </div>
        </div>
      </div>
    </section>

    <!-- What people Say-->
    <section class="section section-sm section-last bg-default">
      <div class="container">
        <h2 class="font-weight-bold">What people Say</h2>
        <!-- Owl Carousel-->
        <div
          class="owl-carousel owl-modern"
          data-items="1"
          data-stage-padding="15"
          data-margin="30"
          data-dots="true"
          data-animation-in="fadeIn"
          data-animation-out="fadeOut"
          data-autoplay="true"
        >
          <!-- Quote Lisa-->
          <article class="quote-lisa">
            <div class="quote-lisa-body">
              <a class="quote-lisa-figure" href="#"
                ><img
                  class="img-circles"
                  src="images/userpages/1-Pierre.png"
                  alt=""
                  width="100"
                  height="100"
              /></a>
              <div class="quote-lisa-text">
                <p class="q font-weight-bold">
                  HLP Studio offers a high caliber of resources skilled in 3D
                  environment. They became our true business partners over the
                  past six years.]
                </p>
              </div>
              <h5 class="quote-lisa-cite font-weight-bold">
                <a href="#">Pierre</a>
              </h5>
              <p class="quote-lisa-status font-weight-bold">Regular Client</p>
            </div>
          </article>
          <!-- Quote Lisa-->
          <article class="quote-lisa">
            <div class="quote-lisa-body">
              <a class="quote-lisa-figure" href="#"
                ><img
                  class="img-circles"
                  src="images/userpages/2-manuel.png"
                  alt=""
                  width="100"
                  height="100"
              /></a>
              <div class="quote-lisa-text">
                <p class="q font-weight-bold">
                  HLP Studio offers a high caliber of resources skilled in 3D
                  environment. They became our true business partners over the
                  past six years.
                </p>
              </div>
              <h5 class="quote-lisa-cite font-weight-bold">
                <a href="#">Manuel</a>
              </h5>
              <p class="quote-lisa-status font-weight-bold">Regular Client</p>
            </div>
          </article>
          <!-- Quote Lisa-->
          <article class="quote-lisa">
            <div class="quote-lisa-body">
              <a class="quote-lisa-figure" href="#"
                ><img
                  class="img-circles"
                  src="images/userpages/3-Greg.png"
                  alt=""
                  width="100"
                  height="100"
              /></a>
              <div class="quote-lisa-text">
                <p class="q font-weight-bold">
                  HLP Studio offers a high caliber of resources skilled in 3D
                  environment. They became our true business partners over the
                  past six years.
                </p>
              </div>
              <h5 class="quote-lisa-cite font-weight-bold">
                <a href="#">Greg</a>
              </h5>
              <p class="quote-lisa-status font-weight-bold">Regular Client</p>
            </div>
          </article>
          <!-- Quote Lisa-->
          <article class="quote-lisa">
            <div class="quote-lisa-body">
              <a class="quote-lisa-figure" href="#"
                ><img
                  class="img-circles"
                  src="images/userpages/4-abbas.png"
                  alt=""
                  width="100"
                  height="100"
              /></a>
              <div class="quote-lisa-text">
                <p class="q font-weight-bold">
                  HLP Studio offers a high caliber of resources skilled in 3D
                  environment. They became our true business partners over the
                  past six years.
                </p>
              </div>
              <h5 class="quote-lisa-cite font-weight-bold">
                <a href="#">4-abbas</a>
              </h5>
              <p class="quote-lisa-status font-weight-bold">Regular Client</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Counter Classic-->
    <section class="section section-fluid bg-default">
      <div class="container-fluid">
        <div
          class="parallax-container"
          data-parallax-img="images/bg-counter-2.jpg"
        >
          <div class="parallax-content section-xl">
            <div class="container">
              <div class="row row-50 justify-content-center border-classic">
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">12</span>
                    </div>
                    <h4 class="counter-classic-title">Awards won</h4>
                  </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">194</span>
                    </div>
                    <h4 class="counter-classic-title">Apps developed</h4>
                  </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">2</span
                      ><span class="symbol">k</span>
                    </div>
                    <h4 class="counter-classic-title">Satisfied customers</h4>
                  </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">25</span>
                    </div>
                    <h4 class="counter-classic-title">team members</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our clients-->
    <section class="section section-xl bg-default">
      <div class="container">
        <h2>Our clients</h2>
        <div class="row row-30 row-sm">
          <div
            class="col-sm-6 col-md-4 col-xl-3 wow fadeInDown"
            v-for="client in clients"
            :key="client.img"
          >
            <a class="clients-classic" :href="client.href"
              ><img :src="client.img" alt="" width="270" height="145"
            /></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
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
    clients: [
      { img: "images/userpages/hkc.png", href: "#" },
      { img: "images/userpages/prominece.png", href: "#" },
      { img: "images/userpages/econcept.png", href: "#" },
      { img: "images/userpages/inxcite.png", href: "#" },
      // {img: 'images/userpages/1.png', href: "#"},
      // {img: 'images/userpages/2.png', href: "#"},
      // {img: 'images/userpages/3.png', href: "#"},
      // {img: 'images/userpages/5.png', href: "#"}
    ],
  }),
};
</script>
<template>
    <div class="page">
 
      <!-- Breadcrumbs -->
      <section class="breadcrumbs-custom-inset">
        <div class="breadcrumbs-custom">
          <div class="container">
            <h1 class="breadcrumbs-custom-title">Blog</h1>
            <ul class="breadcrumbs-custom-path">
              <li><a href="/home">Home</a></li>
              <li class="active">Blog</li>
            </ul>
          </div>
          <div class="box-position" style="background-image: url(images/userpages/about-us-back.png);"></div>
        </div>
      </section>
      <!-- Grid blog-->
      <section class="section section-xl bg-default text-md-left">
        <div class="container">
          <div class="row row-50 justify-content-center">
            <div class="col-sm-9 col-md-6 col-lg-5 col-xl-4" v-for="item in temps" :key="item.img">
              <!-- Post Creative-->
              <article class="post post-creative">
                <div class="post-creative-header">
                  <div class="group-md">
                    <div>
                      <div class="unit flex-column flex-sm-row unit-spacing-sm align-items-center">
                        <div class="unit-left"><img class="img-circles" :src="item.avatar" alt="" width="49" height="49"/>
                        </div>
                        <div class="unit-body">
                          <div class="post-creative-author">by<a href="#"> {{item.creator}}</a></div>
                        </div>
                      </div>
                    </div>
                    <div class="post-creative-time">
                      <time datetime="2021-05-17">{{item.date}}</time>
                    </div>
                  </div>
                </div>
                <a class="post-creative-figure" href="#"><img :src="item.img" alt="" width="370" height="267"/></a>
                <div class="post-creative-footer">
                  <h5 class="post-creative-title"><a href="#">{{item.description}}</a></h5>
                </div>
              </article>
            </div>
          </div>
          <div class="pagination-wrap">
            <!-- Vuetify Pagination-->
            <div class="text-center">
              <v-container>
                <b-row justify="center">
                  <b-col cols="12">
                    <v-container class="max-width">
                      <v-pagination
                        v-model="page"
                        class="my-4"
                        @change="pageChanged"
                        :length="pagelength"
                      ></v-pagination>
                    </v-container>
                  </b-col>
                </b-row>
              </v-container>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    blogs: [
      {
        avatar: "images/user-4-49x49.jpg",
        creator: ' Mary Lee',
        date: 'May 17, 2021',
        description: 'Benefits Of ASync/Await: Asynchronous Programming',
        img: 'images/post-16-370x267.jpg'
      },
      {
        avatar: "images/user-5-49x49.jpg",
        creator: ' Samuel Miller',
        date: 'May 04, 2021',
        description: 'Key Considerations And Warnings Of IPaaS In Cloud Development',
        img: 'images/post-17-370x267.jpg'
      },
      {
        avatar: "images/user-6-49x49.jpg",
        creator: ' Ann Anderson',
        date: 'May 17, 2021',
        description: 'tutorial: Usage of Hibernate Query Language (HQL)',
        img: 'images/post-18-370x267.jpg'
      },
      {
        avatar: "images/user-7-49x49.jpg",
        creator: ' Mary Lee',
        date: 'May 17, 2021',
        description: 'Benefits Of ASync/Await: Asynchronous Programming',
        img: 'images/post-19-370x267.jpg'
      },
      {
        avatar: "images/user-8-49x49.jpg",
        creator: ' Mary Lee',
        date: 'May 17, 2021',
        description: 'Benefits Of ASync/Await: Asynchronous Programming',
        img: 'images/post-20-370x267.jpg'
      },
      {
        avatar: "images/user-9-49x49.jpg",
        creator: ' Mary Lee',
        date: 'May 17, 2021',
        description: 'Benefits Of ASync/Await: Asynchronous Programming',
        img: 'images/post-21-370x267.jpg'
      },
      {
        avatar: "images/user-9-49x49.jpg",
        creator: ' Mary Lee',
        date: 'May 17, 2021',
        description: 'Benefits Of ASync/Await: Asynchronous Programming',
        img: 'images/post-21-370x267.jpg'
      },
    ]
  }),
  methods: {
    pageChanged(e){
      console.log(e)
    }
  },
  computed: {
    temps() {
      let temps = []
      for (let i = 0; i < 6; i++) {
        if(this.blogs[(this.page - 1) * 6 + i])
        temps.push(this.blogs[(this.page - 1) * 6 + i])
      }
      return temps
    },
    pagelength() {
      return this.blogs.length % 6 + 1
    }
  },
}
</script>
<template>
   <div class="page">
      <!-- Breadcrumbs -->
      <section class="breadcrumbs-custom-inset">
        <div class="breadcrumbs-custom">
          <div class="container">
            <h1 class="breadcrumbs-custom-title">Pricing</h1>
            <ul class="breadcrumbs-custom-path">
              <li><a href="/home">Home</a></li>
              <li class="active">Pricing</li>
            </ul>
          </div>
          <div class="box-position" style="background-image: url(images/userpages/about-us-back.png);"></div>
        </div>
      </section>
      <!-- Section Pricing-->
      <section class="section section-sm section-first bg-default">
        <div class="container">
          <div class="row row-30 justify-content-center">
            <div class="col-md-6 col-lg-5 col-xl-4" v-for="pricing in pricings" :key="pricing.title">
              <div class="box-pricing">
                <div class="box-pricing-body">
                  <div class="box-pricing-caption">
                    <h5 class="box-pricing-title">{{pricing.title}}</h5>
                    <h3 class="box-pricing-price">{{pricing.price}}</h3>
                    <div class="box-pricing-time">{{pricing.subtitle}}</div>
                  </div>
                  <div class="divider divider-35"></div>
                  <ul class="box-pricing-list">
                    <li class="active" v-for="item in pricing.items" :key="item">{{item}}</li>
                  </ul>
                </div>
                <div class="box-pricing-button"><a class="button button-lg button-block button-gray-4" href="#">Get started</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>

<script>
export default {
  data: () => ({
    pricings: [
      {
        title: 'Product',
        price: '$ 199.00',
        subtitle: 'starting at',
        items: [
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling'
        ]
      },
      {
        title: 'Exterior',
        price: '$ 229.00',
        subtitle: 'starting at',
        items: [
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling'
        ]
      },
      {
        title: 'Interior',
        price: '$ 199.00',
        subtitle: 'starting at',
        items: [
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling'
        ]
      },
      {
        title: 'AR/VR',
        price: '$ 199.00',
        subtitle: 'starting at',
        items: [
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling'
        ]
      },
      {
        title: 'Clo3D',
        price: '$ 199.00',
        subtitle: 'starting at',
        items: [
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling'
        ]
      },
      {
        title: 'Animation',
        price: '$ 199.00',
        subtitle: 'starting at',
        items: [
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling',
          '3D Modeling'
        ] 
      },
    ]
  })
}
</script>
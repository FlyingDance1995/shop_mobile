<template>
  <div>
    <!--Header-->
    <Header/>
    <!--END Header-->

    <!--NAVIGATION-->
    <Navigation/>
    <!--END NAVIGATION-->

    <!--CONTENT-->
    <Content>
        <nuxt-child/>
    </Content>
    <!--END CONTENT-->

    <!-- NEWSLETTER -->
    <NewsLetter/>
    <!-- /NEWSLETTER -->

    <!--Footer-->
    <Footer/>
    <!--END Footer-->
  </div>
</template>

<script>
  import Header from '~/components/layouts/Header.vue';
  import Navigation from '~/components/layouts/Navigation.vue';
  import NewsLetter from '~/components/layouts/NewsLetter.vue';
  import Footer from '@/components/layouts/Footer.vue';

  export default {
    name: 'HomePage',

    components: {
      Header,
      Navigation,
      NewsLetter,
      Footer,
    },

    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>




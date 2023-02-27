<template>
  <section id="hero">
    <div class="hero-container">
    <div class="carousel carousel-fade slide swiper mySwiper" id="heroCarousel" ref="swiper">
      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
      <div class="swiper-wrapper ">
        <div class="swiper-slide" style="background-image: url(img/slide/applicationmobile.jpeg);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">développement  des applications <br> <span> web/mobile</span></h2>
                  <p class="animate__animated animate__fadeInUp"></p>
                  <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">DÉCOUVRIR NOS APPLICATIONS</a>
                </div>
              </div>
        </div>
        <div class="swiper-slide" style="background-image: url(img/slide/siteinternet.jpg);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">création site internet pro</h2>
                  <p class="animate__animated animate__fadeInUp">La conception, le développement et la publication d’une solution mobile via l’utilisation d’une technologie native.</p>
                  <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Nos Créations</a>
                </div>
              </div>
            </div>

        <div class="swiper-slide" style="background-image: url(img/slide/photo-formation.jpg);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">COMMUNITY MANAGEMENT </h2>
                  <p class="animate__animated animate__adeInUp">Transformer votre audience en communauté engagée.</p>
                  <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">DEMANDEZ UN DEVIS</a>
                </div>
              </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    
  </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true
      },
      autoplay: {
        delay: 3000
      },
    });
  },
};
</script>

<style>
.animate__fadeInDown{
  text-transform: uppercase;
}
</style>
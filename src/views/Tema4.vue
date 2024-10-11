<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 ¿Cómo funciona?
    
    .cont_4_1.p-4.pt-xl-5
      figure.m-auto.d-lg-none.col-md-7.col-11
        img(src="@/assets/curso/tema4/10.png")
      .row
        .col-lg-3.d-none.d-lg-block
        .col-lg-8
          .row.mt-4
            .col-auto.d-none.d-lg-block(style="place-self:center;")
              figure(data-aos="zoom-in-right" data-aos-duration="1000")
                img(src="@/assets/curso/tema4/2.svg")
            .col(style="place-self:center;" data-aos="fade-up")
              p.mb-0 Adobe lllustrator se inicia como cualquier programa que funcione en sistemas operativos Windows o Mac, sencillamente dé clic en inicio (Windows) o en la carpeta de aplicaciones (Mac) y busque el programa por su nombre. Tras iniciarlo, este comenzará por cargar los archivos, #[em plugins], herramientas y menús que lo componen. Este proceso puede tardar desde unos cuantos segundos hasta varios minutos, dependiendo de la capacidad de procesamiento del equipo a utilizar.
          .row.mt-4.justify-content-center
            .col-auto.mb-3
              figure(data-aos="fade-in-up" data-aos-delay="400")
                img(src="@/assets/curso/tema4/3.svg")
            .col-auto.mb-3
              figure(data-aos="fade-in-up" data-aos-delay="450")
                img(src="@/assets/curso/tema4/4.svg")
            .col-auto.mb-3
              figure(data-aos="fade-in-up" data-aos-delay="500")
                img(src="@/assets/curso/tema4/5.svg")
            .col-auto.mb-3
              figure(data-aos="fade-in-up" data-aos-delay="550")
                img(src="@/assets/curso/tema4/6.svg")
            .col-auto.mb-3
              figure(data-aos="fade-in-up" data-aos-delay="600")
                img(src="@/assets/curso/tema4/7.svg")
            .col-auto.mb-3
              figure(data-aos="fade-in-up" data-aos-delay="650")
                img(src="@/assets/curso/tema4/8.svg")
        .col-lg-1.d-none.d-lg-block
    
    figure.mt-4.d-none.d-lg-block(data-aos="fade-up")
      img(src="@/assets/curso/tema4/9.png")


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

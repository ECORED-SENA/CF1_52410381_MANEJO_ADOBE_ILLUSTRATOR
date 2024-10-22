<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-8(data-aos="fade-up")
        p Actualmente, el diseño gráfico y el manejo de imágenes son primordiales en medios masivos. En respuesta a esto, el #[em software] de diseño gráfico se desarrolla a un ritmo vertiginoso, ofreciendo mayor velocidad de trabajo y proporcionando mejores herramientas para llevar a cabo diferentes proyectos, de forma versátil y práctica, ampliando así los límites de lo que se puede generar y reduciendo dramáticamente los tiempos que toman en realizarse.
        .p-4.mt-4(style="background-color:#FFD69B;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure(data-aos="zoom-in-right" data-aos-duration="1000")
                img(src="@/assets/curso/intro1.svg")
            .col(style="place-self:center;")
              p.mb-0 Por consiguiente en este material de formación se explicarán las bases del manejo de #[strong Adobe lllustrator], se aprenderá a concebir la imagen desde su conformación vectorial o como mapa de bits, se tratarán las funciones esenciales, así como los conocimientos requeridos para la preparación de un nuevo proyecto en este #[em software].
        .row.mt-4.justify-content-center
          .col-auto.mb-3
            figure(data-aos="fade-in-up" data-aos-delay="500")
              img(src="@/assets/curso/intro2.svg")
          .col-auto.mb-3
            figure(data-aos="fade-in-up" data-aos-delay="550")
              img(src="@/assets/curso/intro3.svg")
          .col-auto.mb-3
            figure(data-aos="fade-in-up" data-aos-delay="600")
              img(src="@/assets/curso/intro4.svg")
          .col-auto.mb-3
            figure(data-aos="fade-in-up" data-aos-delay="650")
              img(src="@/assets/curso/intro5.svg")
          .col-auto.mb-3
            figure(data-aos="fade-in-up" data-aos-delay="700")
              img(src="@/assets/curso/intro6.svg")
          .col-auto.mb-3
            figure(data-aos="fade-in-up" data-aos-delay="750")
              img(src="@/assets/curso/intro7.svg")
      .col-lg-4.d-none.d-lg-block(data-aos="fade-up-left" data-aos-delay="600" data-aos-duration="1500")
        figure
          img(src="@/assets/curso/intro8.svg")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

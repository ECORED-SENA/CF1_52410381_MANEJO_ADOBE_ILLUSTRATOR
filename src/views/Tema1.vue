<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 ¿Qué es Adobe Illustrator?
    
    .row
      .col-lg-8(data-aos="fade-up")
        .p-4(style="background-color:#FFEACC;")
          p.mb-0 Adobe Illustrator es un #[em software] desarrollado por la empresa estadounidense Adobe, diseñada para crear ilustraciones de tipo vectorial. Dada su robustez, confiabilidad y capacidad de procesamiento, se le considera uno de los programas más completos dentro del campo del diseño visual, lo cual permite desarrollar una amplia gama de piezas gráficas, tales como imagotipos, ilustraciones, piezas publicitarias, páginas web, carátulas, etiquetas, señalética, entre otros.
        p.mt-4 Para entender su funcionamiento es necesario tener claridad sobre el concepto de gráfico vectorial y cuáles son las diferencias que existen entre este tipo de gráficos y los mapas de bits.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/1.svg")
    figure.mt-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema1/2.png")


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

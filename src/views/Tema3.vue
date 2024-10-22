<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 ¿Cuál es la diferencia de un vector con un mapa de #[em bits]?
    
    .row
      .col(style="place-self:center;" data-aos="fade-up")
        p.mb-0 Las imágenes rasterizadas o mapas de #[em bits] están estructurados a manera de mosaico en donde cada uno de los puntos, llamados píxeles, representan un único color. El efecto resultante forma la imagen, por lo que se requiere una cantidad considerable de pixeles para formar la misma, debido a que a mayor número, mejor será la definición de la imagen, sin embargo, esto implica que el peso del archivo que la contenga será mucho mayor. Las cámaras digitales almacenan las fotografías usando mapas de #[em bits], y este es en general el formato usado para montaje y retoque digital.
      .col-auto.d-none.d-lg-block(style="place-self:center;")
        figure(data-aos="zoom-in-left" data-aos-duration="1000")
          img(src="@/assets/curso/tema3/1.png")
    .row.mt-4
      .col-auto.d-none.d-lg-block(style="place-self:center;")
        figure(data-aos="zoom-in-right" data-aos-duration="1000")
          img(src="@/assets/curso/tema3/2.svg")
      .col(style="place-self:center;" data-aos="fade-up")
        p.mb-0 Debido a su conformación, es imposible que las imágenes se puedan ampliar sin que pierda calidad y en sus líneas se empiecen a notar los píxeles, (pixelación). Esto ocurre porque al aumentar el tamaño de la imagen, un área mayor deber ser cubierta por el mismo número de píxeles; en contraposición, un gráfico vectorial puede ser ampliado todo lo que sea necesario sin que aumente de peso o pierda calidad, porque lo que cambia, en este caso, son las variables dentro de la ecuación que lo genera. Sin embargo, esto no quiere decir que un archivo que contenga objetos vectoriales no pueda aumentar de peso, puesto que debido a la simplicidad de dichos objetos se hace necesario crear muchos de ellos para lograr un mayor grado de detalle en los diseños, lo que implica un mayor número de ecuaciones para el software, haciendo que aumente su peso.
    
    .col-xl-10.m-auto.mt-5
      .cont_2_1.p-4
        .col-xl-10.m-auto
          figure(data-aos="zoom-in-up")
            img.d-none.d-md-block(src="@/assets/curso/tema3/3.png")
            img.d-md-none(src="@/assets/curso/tema3/4.png")

</template>

<script>
export default {
  name: 'Tema3',
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

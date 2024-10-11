<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 ¿Qué es un gráfico vectorial?
    
    .row
      .col-auto.d-none.d-md-block(style="place-self:center;")
        figure(data-aos="zoom-in-right" data-aos-duration="1000")
          img(src="@/assets/curso/tema2/1.svg")
      .col(style="place-self:center;" data-aos="fade-up")
        p.mb-0 Los gráficos vectoriales se definen matemáticamente como un espacio determinado por una ecuación matemática, es decir, un elemento que toma forma a partir de dicha ecuación. Se conoce como objetos a los elementos gráficos contenidos en un archivo vectorial, los cuales se componen de un relleno que identifica el espacio a ocupar por el objeto y además, por un contorno que representa el límite entre su espacio y lo que se encuentra fuera de él.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los objetos cuentan con propiedades básicas que se deducen de su propia naturaleza, como lo son: la forma, el tamaño, la posición y el color. Esto permite que el programa pueda almacenar la información basándose únicamente en su forma. Por ejemplo, si el objeto tiene una forma circular, Adobe Illustrator almacena su radio y su centro, si se trata de una simple línea recta, lo hace con las posiciones de sus puntos inicial y final. Esto permite recrear los objetos a partir de los datos guardados en el archivo cada vez que se necesiten, además de modificar los gráficos en cuanto a su aspecto y tamaño sin que pierdan calidad.
    
    .col-xl-10.m-auto.mt-4
      .cont_2_1.p-4
        .col-xl-10.m-auto
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema2/3.png")





</template>

<script>
export default {
  name: 'Tema2',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 El espacio de trabajo, organización y distribución
    
    .cont_6_1.p-4.p-lg-0
      .row
        .col.p-xl-5
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure(data-aos="zoom-in-right" data-aos-duration="1000")
                img(src="@/assets/curso/tema6/1.svg")
            .col(style="place-self:center;" data-aos="fade-up")
              p.mb-0 El espacio de trabajo se refiere a la configuración que tiene la interfaz del programa en cuanto a la distribución de los paneles o ventanas activas y las cajas de herramientas personalizadas, esta es una de las posibilidades que permite Adobe Illustrator. Otro aspecto esencial, es el espacio de trabajo predeterminado, el cual tiene 5 paneles abiertos y la caja de herramientas general, como su nombre lo sugiere, está diseñada para explorar las características fundamentales del #[em software].
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema6/2.svg")
    
    .cont_decorativo2.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema5/4.svg")
        .col.ps-1(style="place-self:center;")
          h5.mb-0.pe-3 Encabezado de la aplicación
    
    p(data-aos="fade-left") Al crear un nuevo documento en Illustrator, encontrará en el encabezado de la aplicación las siguientes opciones:

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/3.png")
      .col-lg-9(data-aos="fade-up")
        .p-4.h-100.d-fllex.align-content-center.flex-wrap.p-relative(style="background-color:#FFEACC;")
          img.d-none.d-lg-block(src="@/assets/curso/tema6/4.png" style="position:absolute;max-width:fit-content;right:0;bottom:0;")
          .row
            .col
              p #[strong Compartir documento:] al hacer clic en este ícono, puede invitar rápidamente a otras personas a colaborar en su documento. Asegúrese de guardar el archivo como un documento en la nube antes de compartirlo.
              p #[strong Buscar y descubrir:] además de las opciones de búsqueda habituales, ahora tiene acceso al panel Descubrir. Este panel ofrece recomendaciones personalizadas basadas en sus habilidades y proyectos anteriores, incluyendo consejos y tutoriales para agilizar flujos de trabajo complejos.
              p #[strong Organizar documento:] puede utilizar este ícono para organizar todos sus documentos abiertos en una vista de cuadrícula o mosaico.
              p.mb-0 #[strong Cambiar espacio de trabajo:] puede acceder a diferentes opciones de espacio de trabajo, haciendo clic en este ícono. 
            .col-auto.d-none.d-lg-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema6/5.png")
    
    .cont_decorativo2.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema5/4.svg")
        .col.ps-1(style="place-self:center;")
          h5.mb-0.pe-3 Espacios de trabajo
    
    .row
      .col
        p Illustrator ofrece diez espacios de trabajo distintos, diseñados para adaptarse a diferentes necesidades y flujos de trabajo, incluyendo un espacio de trabajo optimizado para dispositivos táctiles. El espacio de trabajo predeterminado esenciales, es una configuración versátil que proporciona acceso rápido a las herramientas y paneles más utilizados. Cada espacio de trabajo está configurado para optimizar su productividad en tareas específicas, como dibujo, pintura, diseño tipográfico o creación de animaciones. Estos espacios se pueden personalizar según sus preferencias, lo que le permite organizar las herramientas y paneles de manera que se adapten mejor a su estilo de trabajo.
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure(data-aos="zoom-in-right" data-aos-duration="1000")
              img(src="@/assets/curso/tema6/6.svg")
          .col(style="place-self:center;" data-aos="fade-up")
            p.mb-0 Estos diferentes espacios se encuentran predeterminados, para que el usuario disponga de los paneles, barras y ventanas adecuados al proyecto de diseño que esté desarrollando o a la especialidad del creativo gráfico:
      .col-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/7.png")
    
    .tarjeta.cont_6_2.p-4.p-lg-5.pb-lg-4.mt-4
      SlyderA(tipo="b")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Aspectos esenciales
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/8.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Aspectos esenciales clásicos
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/9.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Automatización
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/10.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Diseño
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/11.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Impresión y pruebas
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/12.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Pintura
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/13.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Tipografía
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/14.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Trazado
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/15.png")
        .row
          .cont_decorativo2.mb-4
            .row
              .col-auto.pe-0
                figure
                  img(src="@/assets/curso/tema5/4.svg")
              .col.ps-1(style="place-self:center;")
                h5.mb-0.pe-3 Web
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema6/16.png")
    
    p.mt-4(data-aos="fade-right") Ahora, el espacio de trabajo táctil es particularmente útil para quienes utilizan dispositivos con pantalla táctil, debido a que ofrece una interfaz más simple y accesible, con íconos más grandes y gestos intuitivos, lo que facilita trabajar sin un teclado o #[em mouse].

    .col-xl-10.mt-4.m-auto
      .p-3(style="background-color:#D6D8FC;border-right:7px #9A9EF7 solid;")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure(data-aos="zoom-in-right" data-aos-duration="1000")
              img(src="@/assets/curso/tema6/17.svg")
          .col(style="place-self:center;" data-aos="fade-up")
            p.mb-0.fw-bold Es importante saber que puede cambiar entre estos espacios de trabajo de manera rápida y sencilla desde el menú de la aplicación, o crear su propio espacio personalizado para un acceso aún más eficiente a las herramientas que utiliza con mayor frecuencia.
            





</template>

<script>
export default {
  name: 'Tema6',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1  Conociendo la interfaz, el entorno básico de Adobe lllustrator 
    
    p(data-aos="fade-down") La interfaz de Adobe Illustrator está diseñada para ofrecer un entorno de trabajo flexible y eficiente, adecuado para diseñadores gráficos, ilustradores y otros profesionales creativos. La siguiente imagen presenta sus principales componentes.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Componentes principales 
      .cont_2_1.p-4
        .col-xl-10.m-auto
          figure(data-aos="zoom-in-up")
            img.d-none.d-md-block(src="@/assets/curso/tema5/1.svg" alt="Imagen que presenta los componentes principales de la interfaz de Adobe Illustrator.")
            img.d-md-none(src="@/assets/curso/tema5/2.svg" alt="Imagen que presenta los componentes principales de la interfaz de Adobe Illustrator.")
    
    p.mt-5(data-aos="fade-right") A continuación, se presenta una explicación detallada de cada uno de esos componentes:

    .cont_5_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Barra de menú
              p Se encuentra en la parte superior de la ventana de Illustrator y contiene los menús desplegables tradicionales como Archivo, Edición, Objeto, Texto, Selección, Efecto, Ver, Ventana, y Ayuda. Estos menús ofrecen acceso a todas las funciones y herramientas de Illustrator, desde la creación y manipulación de objetos, hasta la configuración de preferencias y la gestión de documentos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/5.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Barra de aplicaciones
              p Se encuentra situada al lado de la barra de menú, e incluye opciones como el acceso rápido a la nube creativa, herramientas de búsqueda, y opciones de control de espacio de trabajo. Aquí también encontrará el Selector de Espacio de Trabajo, el cual le permite cambiar entre diferentes configuraciones predefinidas, según el tipo de tarea que esté realizando.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/6.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Panel de control
              p Ubicado justo debajo de la barra de aplicaciones, muestra opciones contextuales que cambian según la herramienta o el objeto seleccionado. Por ejemplo, si selecciona una herramienta de texto, el panel de control mostrará opciones para cambiar la fuente, el tamaño, el color, el kerning, y otras propiedades relacionadas. Este panel es fundamental para ajustar rápidamente las propiedades de los objetos, sin tener que navegar por diferentes menús.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/7.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Barra de herramientas
              p Se sitúa generalmente en el lado izquierdo de la interfaz. Contiene todas las herramientas necesarias para crear y manipular gráficos vectoriales. Las herramientas están agrupadas por función, incluyendo herramientas de selección, dibujo, tipografía, pintura, y manipulación de objetos. Algunas herramientas tienen opciones adicionales, a las que se puede acceder haciendo clic derecho o manteniendo presionado sobre la herramienta en la barra.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/8.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Paneles y ventanas flotantes
              p En el lado derecho de la interfaz, encontrará una serie de paneles que puede organizar y personalizar, según sus necesidades. Los paneles más comunes incluyen:
              ul.lista-ul.mt-3.mb-0
                li.d-flex
                  i.fas.fa-bezier-curve(style="color:#FF7650;")
                  span #[strong Capas:] muestra y organiza todos los elementos dentro del documento en diferentes capas, facilitando la organización y edición de objetos de forma individual.
                li.d-flex
                  i.fas.fa-bezier-curve(style="color:#FF7650;")
                  span #[strong Propiedades:] es un panel central que combina muchas de las funciones básicas, proporcionando acceso rápido a las propiedades de los objetos seleccionados.
                li.d-flex
                  i.fas.fa-bezier-curve(style="color:#FF7650;")
                  span #[strong Color y muestras:] son utilizados para seleccionar y almacenar colores, degradados y patrones.
                li.d-flex
                  i.fas.fa-bezier-curve(style="color:#FF7650;")
                  span #[strong Trazados y pinceles:] ofrecen opciones para personalizar las líneas y trazos, incluyendo la creación y almacenamiento de pinceles personalizados.
                li.d-flex
                  i.fas.fa-bezier-curve(style="color:#FF7650;")
                  span #[strong Bibliotecas:] aquí puede acceder a activos y estilos guardados en su cuenta de Creative Cloud, facilitando la integración de recursos en múltiples proyectos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/9.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Mesa de trabajo
              p Es el área principal donde se crean y editan los diseños. Es el espacio blanco grande en el centro de la pantalla. Recuerde que puede tener múltiples mesas de trabajo dentro de un mismo documento, lo que es útil para proyectos que requieren múltiples diseños o formatos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/10.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Reglas, guías y cuadrículas
              p Las reglas, que se pueden activar desde el menú Ver, le permiten medir y alinear objetos con precisión. Las guías son líneas que puede arrastrar desde las reglas, y le pueden ayudar a alinear objetos, y la cuadrícula es una serie de líneas horizontales y verticales que se pueden usar como referencia visual.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/11.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .cont_decorativo2.mb-4
                .row
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema5/4.svg")
                  .col.ps-1(style="place-self:center;")
                    h5.mb-0.pe-3 Estado del documento
              p En la parte inferior de la interfaz, encontrará información sobre el estado del documento, como el nivel de zoom actual, el número de mesas de trabajo, el modo de color, y el perfil de documento. También puede acceder rápidamente a la resolución del archivo y otras configuraciones importantes.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema5/12.png')





</template>

<script>
export default {
  name: 'Tema5',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Exploración de conceptos clave en Adobe Illustrator y gráficos vectoriales ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar y comprender los conceptos fundamentales asociados a Adobe Illustrator. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué tipo de gráficos se crean principalmente en Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mapas de <em>bits</em>. ', esCorrecta: false },
            { id: 'b', texto: 'Gráficos vectoriales. ', esCorrecta: true },
            { id: 'c', texto: 'Fotografías. ', esCorrecta: false },
            { id: 'd', texto: 'Videos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos no es una propiedad básica de un objeto vectorial? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Forma.', esCorrecta: false },
            { id: 'b', texto: 'Tamaño.', esCorrecta: false },
            { id: 'c', texto: 'Posición.', esCorrecta: false },
            { id: 'd', texto: 'Textura.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal ventaja de un gráfico vectorial sobre un mapa de <em>bits</em>? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Puede ser ampliado sin perder calidad. ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Tiene más colores. ', esCorrecta: false },
            { id: 'c', texto: 'Es más ligero. ', esCorrecta: false },
            { id: 'd', texto: 'Es más realista. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la función principal de Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Editar fotografías. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Crear imágenes vectoriales desde cero. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Diseñar videos. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Editar documentos de texto. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué sucede cuando se amplía una imagen en formato de mapa de <em>bits</em>? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La imagen mantiene su calidad. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La imagen pierde calidad y se pixeliza. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La imagen se convierte en un gráfico vectorial. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño de la imagen no cambia. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta de Adobe Illustrator le permite cambiar entre diferentes configuraciones predefinidas de espacio de trabajo? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Barra de Menú. ', esCorrecta: false },
            { id: 'b', texto: 'Barra de Herramientas. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'Selector de Espacio de trabajo. ',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Panel de Control.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de documentos puede gestionar con la opción "Organizar documento" en Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Documentos de texto. ', esCorrecta: false },
            { id: 'b', texto: 'Documentos de dibujo. ', esCorrecta: true },
            { id: 'c', texto: 'Documentos de video. ', esCorrecta: false },
            { id: 'd', texto: 'Documento de vectores. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes paneles no se encuentra en Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Capas.', esCorrecta: false },
            { id: 'b', texto: 'Propiedades.', esCorrecta: false },
            { id: 'c', texto: 'Color y muestras.', esCorrecta: false },
            { id: 'd', texto: 'Gráficas 3D.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función de las Guías en Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la resolución de imágenes. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ayudar a alinear objetos con precisión. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar el color de los objetos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agregar efectos de textura a los objetos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se puede hacer en el Panel de control de Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar las propiedades de los objetos seleccionados. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Organizar los archivos de texto. ',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Editar videos. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Modificar el tamaño del lienzo. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

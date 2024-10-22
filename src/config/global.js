export default {
  global: {
    componenteFormativo: 'Conociendo Adobe Illustrator',
    descripcionCurso:
      'Este componente formativo sobre Adobe Illustrator cubre los conceptos básicos de gráficos vectoriales y mapas de <em>bits</em>, destacando las diferencias entre ambos. Explica las funciones clave del <em>software</em>, su interfaz, y cómo iniciar y manejar proyectos de diseño gráfico. También aborda la organización del espacio de trabajo y ofrece propuestas didácticas y recursos complementarios para reforzar el aprendizaje.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es Adobe Illustrator?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '¿Qué es un gráfico vectorial?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          '¿Cuál es la diferencia de un vector con un mapa de <em>bits</em>?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '¿Cómo funciona?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Conociendo la interfaz, el entorno básico de Adobe lllustrator',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'El espacio de trabajo, organización y distribución',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es Adobe Illustrator? ',
      referencia:
        'Visualbit Studio. (2021). ¿<em>Qué es Adobe Illustrator, para qué sirve y cuáles son sus versiones</em>? (video). YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YlkOfntMYSM  ',
    },
  ],
  glosario: [
    {
      termino: 'Adobe Illustrator',
      significado:
        '<em>software</em> de diseño gráfico especializado en la creación de gráficos vectoriales. ',
    },
    {
      termino: 'Barra de menú',
      significado:
        'sección de la interfaz que contiene los menús desplegables tradicionales del <em>software</em>. ',
    },
    {
      termino: 'Capas',
      significado:
        'herramienta que permite organizar los elementos gráficos en diferentes niveles dentro de un documento. ',
    },
    {
      termino: 'Color',
      significado:
        'propiedad que define el aspecto visual de un objeto, seleccionable en el panel de muestras. ',
    },
    {
      termino: 'Cuadrículas',
      significado:
        'líneas de referencia que ayudan a alinear objetos en la mesa de trabajo. ',
    },
    {
      termino: 'Documentos',
      significado:
        'archivos de trabajo en Adobe Illustrator, donde se crean y editan los diseños. ',
    },
    {
      termino: 'Guías',
      significado:
        'líneas auxiliares que se utilizan para alinear y posicionar objetos de manera precisa. ',
    },
    {
      termino: 'Interfaz',
      significado:
        'conjunto de herramientas y paneles que conforman el entorno de trabajo del <em>software</em>. ',
    },
    {
      termino: 'Mapa de <em>bits</em>',
      significado:
        'imágenes formadas por píxeles que representan colores individuales. ',
    },
    {
      termino: 'Vector',
      significado:
        'gráfico matemático que puede escalarse sin pérdida de calidad visual. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe Blogs. (2014). La liberación de 2014 ¡Illustrator CC está aquí! ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Díaz Carrillo',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindio',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

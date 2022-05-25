export default {
  global: {
    componenteFormativo: 'Importancia y aplicación de la investigación',
    descripcionCurso:
      'En la investigación se exploran métodos y técnicas estadísticas, siendo mecanismos cruciales para la proyección de la investigación. Estas técnicas de procesamiento de datos utilizan modelos matemáticos y herramientas informáticas, identificando fuentes de información, lo cual permitirá dar mayor comprensión para la construcción de la información y el análisis que posteriormente arrojen los resultados analizados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métodos ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de investigación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Parámetros estadísticos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Población',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Muestra',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fuentes y técnicas de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de fuentes de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de recolección de información',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Instrumentos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Caballero, A. (2014). <em>Metodología integral innovadora para planes y tesis: la metodología del cómo formularlos</em>. Cengage Learning.',
    },
    {
      referencia:
        'Gamboa, M.  (2017). <em>Estadística aplicada a la investigación científica</em>. Editorial Redipe-Edacun.',
    },
    {
      referencia:
        'Hernández-Sampieri, R., Fernández-Collado, C., & Baptista-Lucio, P. (2006). <em>Análisis de los datos cuantitativos. Metodología de la investigación</em>. McGraw Hill Education.',
    },
    {
      referencia:
        'Hernández Sampieri, R. (2014). <em>Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta</em>. Sexta edición. McGraw Hill México.',
    },
    {
      referencia:
        'Rivera, M. & Fernández, M. (2015). <em>Fuentes de información</em>. Universidad Autónoma del Estado de Hidalgo. ',
    },
    {
      referencia:
        'Tamayo, C. & Siesquen, I. (s.f.). <em>Técnicas e instrumentos de recolección de datos</em>. Universidad Católica Los Ángeles de Chimbote. ',
      link:
        'https://www.postgradoune.edu.pe/pdf/documentos-academicos/ciencias-de-la-educacion/22.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Instrumento',
      significado:
        'Elemento que sirve de herramienta para el levantamiento de información.',
    },
    {
      termino: 'Método',
      significado:
        'Secuencia de procesos, procedimientos o actividades ordenadas para el desarrollo de un ejercicio, ejecutando un protocolo establecido.',
    },
    {
      termino: 'Parámetros de centralización',
      significado:
        'Indican en torno a qué valor o criterio central se distribuyen los datos obtenidos, para lo cual se establecen la media aritmética, mediana y moda.',
    },
    {
      termino: 'Parámetros de dispersión',
      significado:
        'Son la representación de los datos que se alejan de la parte central de los valores de distribución generales.',
    },
    {
      termino: 'Parámetros de posición',
      significado:
        'Son los datos que se organizan en criterios conocidos como cuantiles, que son variables de intervalos en los que se dividen los datos.',
    },
    {
      termino: 'Proceso',
      significado:
        'Secuencia de actividades que requieren ser desarrolladas bajo mecanismos controlados.',
    },
    {
      termino: 'Técnica',
      significado:
        'Características para el desarrollo de una actividad específica que parte de la pericia y la secuencia para adelantar actividades.',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad Nacional - Sede Manizales. (2017). <em>0.1 Vídeo Introductorio: Antecedentes de la Estadística</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-NutZ7n-Exg',
    },
    {
      texto:
        'Carreón, D. (2017). <em>Media, moda y mediana - Medidas de tendencia central</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/0DA7Wtz1ddg',
    },
    {
      texto:
        'Bioestadística Odontología UV. (2014). <em>¿Qué son los cuantiles?</em>',
      tipo: 'Video',
      link: 'https://youtu.be/x9fznavEozk',
    },
    {
      texto:
        'Math2me Kids. (2021). <em>Medidas de dispersión - datos no agrupados</em.',
      tipo: 'Video',
      link: 'https://youtu.be/pLPKjLfjRYE',
    },
    {
      texto:
        'Lifeder Educación. (2020). <em>¿Qué son la población y la muestra?</em>',
      tipo: 'Video',
      link: 'https://youtu.be/Q4RZqKLZ8zU',
    },
    {
      texto: 'Fbombab. (2018). <em>Tamaño de muestra paso a paso</em>',
      tipo: 'Video',
      link: 'https://youtu.be/oc8i9g144Y0',
    },
    {
      texto:
        'López, J. & Tenemaya, L. (2021). <em>Confiabilidad y validez de un instrumento de investigación I Metodología de la investigación</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/yZH6WGoQMhk',
    },
    {
      texto:
        'Quintero, L. (2019). <em>Tipos de preguntas en una encuesta</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/mwnQuUi9014',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilmar Eduardo Amaya Ávila',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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

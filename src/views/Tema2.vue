<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#fff") 2
      h1 Estadística
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p Consiste en recoger datos para así clasificarlos y presentarlos adecuadamente, para esto se requiere de una organización y análisis de la información, de tal modo que sirvan para la posterior toma de decisiones.
        p La estadística es utilizada científicamente pero también de manera rutinaria por las personas, que en muchas ocasiones la emplean desconociendo su interpretación. Comúnmente es y ha sido aplicada a lo largo de la historia de la humanidad en diferentes áreas del conocimiento y en diferentes conductas sociales.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 450px").m-auto
      .col-lg-7
        p Dada su naturaleza y su método es una ciencia exacta, debido a que permite experimentar las probabilidades con argumentos que desarrollan o crean métodos, lo cuales permiten evaluar el comportamiento de las tendencias, asumiendo como objetivo el estudio de conjuntos numerosos de personas, animales y objetos de cualquier clase o cualquier tipo de información, entre otras, que puedan ser recopiladas y analizadas para la orientación del planteamiento de necesidades.
        p Con el ánimo de que pueda comprender de manera integral los antecedentes de la estadística se recomienda consultar el video #[b “La estadística, su historia y evolución”] en el material complementario.
    #t_2_1
    .titulo-segundo.color-secundario
      h2 2.1 Parámetros estadísticos
    .row.align-items-start.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width: 70px").m-auto
      .col
        p Para la definición de este concepto es vital comprender que mediante este mecanismo se puede dar lectura, interpretación y síntesis a los datos que sean objeto de estudio, por lo cual se distribuirán los parámetros en tres grandes componentes, que de acuerdo con las denominaciones estadísticas se subdividen bajo los siguientes conceptos.
    .row.mb-5.bg-color2
      .col-12.p-5
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: 50px").m-auto
          .col
            p.mb-0 #[span.txt-deco1 Parámetros de centralización:] indican en torno a qué valor o criterio central se distribuyen en los datos obtenidos, para lo cual se establecen tres criterios así:
        .row.justify-content-center
          .col-lg-8
            .tarjeta.tarjeta--gris.p-4.mb-4
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-10
                    p.mb-4 #[span.txt-deco2 A.] #[b Media aritmética]: la media es la suma de todos los datos dividido por el número de datos.
                    h3.txt-deco3.mb-4 Ejemplo:
                    .row
                      .col-12.p-5.bg-white
                        p.text-center #[b “Tres es la cantidad de datos”    entonces la media es 2]
                .row.justify-content-center
                  .col-10
                    p.mb-4 #[span.txt-deco2 B.] #[b Mediana]: representa el valor de la variable de la posición central en un conjunto de datos ordenados.
                    h3.txt-deco3.mb-4 Ejemplo:
                    .row
                      .col-12.p-5.bg-white
                        p.text-center #[b En los números (1, 5, 10)]
                        p.text-center #[b La mediana en la posición central, en este caso corresponde a 5]
                .row.justify-content-center
                  .col-10
                    p.mb-4 #[span.txt-deco2 C.] #[b Moda]: es el valor de la variable con mayor frecuencia absoluta.
                    h3.txt-deco3.mb-4 Ejemplo:
                    .row
                      .col-12.p-5.bg-white
                        p.text-center #[b En los números (3, 2, 3, 4, 5, 3, 7, 8, 7 y 10)]
                        p.text-center #[b Los números 2, 4, 5, 8 y 10 aparecen una vez cada uno; el número 3 aparece en tres ocasiones y el número 7 aparece en dos oportunidades.]
                        p.text-center #[b Así, entonces, la moda estadística es el número 3.]
            p Para comprender mejor los parámetros estadísticos podrá observar el video “Media, moda y mediana” sobre las medidas de tendencia central, en el material complementario.
    .row.mb-5.bg-color2
      .col-12.p-5
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img4.svg', style="width: 50px").m-auto
          .col
            p.mb-0 #[span.txt-deco1 Parámetros de posición:] consta de dividir los datos en grupos con el mismo número de datos recopilados. Para esto es necesario organizar la información de datos de menor a mayor, para su interpretación se organiza en criterios conocidos como cuantiles, los cuales son variables de intervalos en los que se dividen los datos.
        .row.justify-content-center
          .col-lg-8
            h3.txt-deco3.mb-4 Ejemplo:
            .row.mb-4
              .col-12.p-5.bg-color3
                ul.lista-ul.mb-0
                  li 
                    i.far.fa-circle(style="color: #7F4FC7")
                    |
                    p.mb-0 #[b Percentiles:] división de una serie de datos en 100 partes iguales.
                  li 
                    i.far.fa-circle(style="color: #7F4FC7")
                    |
                    p.mb-0 #[b Deciles:] división de una serie de datos en 10 partes iguales.
                  li 
                    i.far.fa-circle(style="color: #7F4FC7")
                    |
                    p.mb-0 #[b Quintiles:] división de una serie de datos en 5 partes iguales.
                  li 
                    i.far.fa-circle(style="color: #7F4FC7")
                    |
                    p.mb-0 #[b Cuartiles:] división de una serie de datos en 4 partes iguales.
            p.mb-0 Para que pueda interiorizar mejor el concepto de parámetros de posición, en el material complementario encontrará el video “¿Qué son los cuantiles?”
    .row.mb-5.bg-color2.mb-5
      .col-12.p-5
        .row.align-items-center.mb-5
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img5.svg', style="width: 50px").m-auto
          .col
            p.mb-0 #[span.txt-deco1 Parámetros de dispersión:] establecidos para interpretar cuando se alejan de la parte central de los valores de distribución datos.
        .row
          .col-lg-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img7.svg', style="width: 450px").m-auto
          .col-lg-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img8.svg', style="width: 450px").m-auto
          .col-lg-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img9.svg', style="width: 450px").m-auto
        p También podrá observar en el material complementario el video #[b “Medidas de dispersión - datos no agrupados”] para complementar la información frente a la temática.
    p.mb-5 A continuación vea gráficamente un resumen sobre los tipos de parámetros desarrollados:
    .titulo-sexto.color-acento-botones.mb-5
      p.mb-0 #[b Figura 1]. Tipos de parámetros estadísticos
    figure.mb-5
      img(src='@/assets/curso/tema2/img10.svg', style="width: 1250px").m-auto
    .separador.mb-5
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Población
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p En estadística, el término población refiere a la integración de datos que requieren ser organizados, analizados e interpretados, expone Gamboa (2017) que la población no se refiere exclusivamente a seres humanos, sino que también puede corresponder a animales, muestras biológicas, expedientes, hospitales, objetos, familias, organizaciones, etc. Para estos últimos, podría ser más adecuado utilizar un término análogo, como universo de estudio.
        .row
          .col-12.p-4.bg-color4
            p.mb-0 Entonces en el objeto de estudio el análisis de la información conlleva a estudiar datos identificados, estos datos se conocen como población, y un ejemplo puede ser la cantidad de personas o la cantidad de cosas en un lugar específico, con el fin de ser analizada.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: 450px").m-auto
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width: 450px").m-auto
      .col-lg-7
        p Para definir una población tenga en cuenta características que terminan siendo determinantes para el desarrollo de la investigación, el primer criterio para tener en cuenta es la selección correcta de la población a estudiar, porque de acuerdo con una selección clara de su población permitirá alcanzar una delimitación objetiva, permitiendo la organización de los datos requeridos para el estudio.
        p.mb-0 Es de tener en cuenta que hay poblaciones con datos infinitos, pero también estas poblaciones se pueden delimitar con el objetivo que sus datos sean finitos; otra característica determinante que le permitirá ubicar de manera correcta los datos a ser estudiados es la ubicación cronológica, no es lo mismo estudiar una población determinada en diferentes momentos, porque entran a ponderar variables externas que influyen en los análisis estadísticos que se deseen adelantar.
    .separador.mb-5
    .row.mb-5.bg-color5
      .col-12.pt-5.px-5
        #t_2_3
        .titulo-segundo.color-secundario
          h2 2.3 Muestra
        .row.align-items-center.mb-4
          .col-lg-7.mb-4.mb-lg-0
            .row.align-items-start
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img2.svg', style="width: 70px").m-auto
              .col
                p La acción de realizar un muestreo de la información se refiere a la selección de una porción-parte-subconjunto de datos del universo o población, la cual haya sido seleccionada, delimitada y ubicada cronológicamente y es objeto de estudio en la investigación.
                p.mb-0 El muestreo tiene por objetivo estudiar las relaciones existentes entre la distribución de una variable “Y” en una población “Z” y, la distribución de esta variable en la muestra de estudio (Hernández Sampieri, 2006), quien a su vez también expone que cuando se determina la muestra en una investigación se toman dos decisiones fundamentales: 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img11.svg', style="width: 450px").m-auto
        .row.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img12.svg', style="width: 550px").m-auto
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img13.svg', style="width: 550px").m-auto
        p.mb-5 Estos dos elementos permiten claramente unificar esfuerzos mediante la centralización de la información, logrando con estos tener datos que representen la integralidad de los resultados analizados y que conllevarán a las decisiones.
        .row.align-items-center.bg-color3.p-5.p-lg-0.mb-5(style="margin-inline: -3.2rem !important")
          .col-lg-4
            figure.my-4.my-lg-0
              img(src='@/assets/curso/tema2/img14.svg', style="width: 550px").m-auto
          .col-lg-6
            p Se invita a consultar en el material complementario el video.
            h3 “¿Qué son la población y la muestra?”.
          .col-2.mb-4.mb-lg-0
            a.boton.color-acento-botones.me-3(href="https://youtu.be/Q4RZqKLZ8zU" target="_blank")
              span Descargar
              i.fas.fa-file-download
        h2.mb-4 Determinación de la muestra
        p.mb-5 Buscando cómo llegar de manera correcta al tamaño de la muestra, la cual busca encontrar esa porción-parte-subconjunto de datos del universo o población que haya sido seleccionada, se deben buscar mecanismos para la reducción de costos en diferentes recursos, entre ellos:
        .row.justify-content-evenly.mb-5
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img15.svg', style="width: 300px").m-auto
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img16.svg', style="width: 300px").m-auto
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/img17.svg', style="width: 300px").m-auto
        p Siendo el muestreo un mecanismo que selecciona y delimita la recolección de los datos, se puede realizar en menor tiempo y también permite el estudio de poblaciones muy grandes.
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Para hallar el tamaño de la muestra, estadísticamente se desarrollan métodos, por lo cual es importante identificar cuál es el nivel de confianza, siendo este grado de certeza o probabilidad expresado en porcentajes con el que se pretende realizar la estimación de un parámetro a través de un estadístico muestral “fórmula”.
            p Una cosa muy importante es que el nivel de confianza lo coloca el investigador, este es el grado de certeza que se requiere en la investigación, esto ligado el margen de error, que es la estimación máxima aceptada de equivocación en el resultado analizado en una investigación.
            p.mb-0 Profundice en el tema de determinación de la muestra a través del video “Tamaños de muestra paso a paso” en el material complementario.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width: 450px").m-auto

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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color:#fff")
      h1 Introducción
    p.mb-5 La investigación científica está basada en métodos que son determinantes para la estructuración de una tesis, vea a continuación en qué consiste:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DvYrv4kCFI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

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

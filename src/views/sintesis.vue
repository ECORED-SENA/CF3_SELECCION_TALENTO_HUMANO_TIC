<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-start.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema4/img2.svg', style="width: 70px").m-auto
      .col
        p.mb-0 A través del siguiente diagrama se puede observar una organización gráfica de todo el proceso de investigación, en el que se sintetiza toda la información relevante, desarrollada a través del componente formativo:
    figure
      img(src="@/assets/curso/sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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

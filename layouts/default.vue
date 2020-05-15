<template>
  <div class="wrap">
    <nuxt />
    <Footer />
    <basement />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import basement from '~/components/basement'
export default {
  components: {
    Footer,
    basement
  }
}
</script>

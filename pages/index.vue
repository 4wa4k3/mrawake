<template>
  <div class="main">
    <Header />
    <section class="tools">
      <tool v-for="(tool, i) in tools" :key="i" :tool="tool" />
    </section>
    <overlay v-for="tool in tools" :key="tool.id" :tool="tool" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import tool from '~/components/tool'
import overlay from '~/components/overlay'
export default {
  name: 'Main',
  components: {
    Header,
    tool,
    overlay
  },
  computed: {
    tools() {
      return this.$store.getters['tools/tools']
    }
  }
}
</script>

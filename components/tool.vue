<template>
  <figure class="tool" @click="toolId()">
    <img :src="require(`~/assets/img/pnd_${tool.svg}.svg`)" :alt="tool.name" />
  </figure>
</template>

<script>
export default {
  name: 'Tool',
  props: {
    tool: {
      type: Object,
      default() {
        return {
          id: {
            type: String,
            default: '0'
          },
          name: {
            type: String,
            default: 'Tool Name'
          },
          svg: {
            type: String,
            default: 'scythe'
          },
          selected: {
            type: Boolean,
            default: false
          }
        }
      }
    }
  },
  methods: {
    toolId() {
      this.$store.commit('tools/toolSelected', this.tool.id)
    }
  }
}
</script>

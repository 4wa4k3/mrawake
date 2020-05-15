<template>
  <div class="tool-overlay" :class="{ 'tool-show': tool.selected }">
    <figure>
      <img
        :src="require(`~/assets/img/pnd_${tool.svg}.svg`)"
        :alt="tool.name"
      />
    </figure>
    <article>
      <button @click="toolId()">close</button>
      <h1>{{ tool.name }}</h1>
      <p class="rating" v-html="tool.rating"></p>
      <p class="description" v-html="tool.description"></p>
    </article>
  </div>
</template>
<script>
export default {
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
          rating: {
            type: String,
            default: '&#128078;'
          },
          description: {
            type: String,
            default: 'Tool Description'
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

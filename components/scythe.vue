<template>
  <div class="tool">
    <svg
      id="scythe"
      xmlns="http://www.w3.org/2000/svg"
      width="192.4"
      height="342.65"
      viewBox="0 0 192.4 342.65"
      @click="select"
    >
      <path
        d="M5.51,107.58c0-11.6-3.24-40.44,18.75-70.44,2.34-3.37,7.16-8.72,7.08-8.63l3.34-3.44,3.52-3.28,3.69-3.11C96.64-24.62,172.25,5,189.05,63.61c4.66,16.21,4.52,33.53-.76,48.75a3.51,3.51,0,0,1-6.82-1.2c.05-31.28-13.2-56.59-34.23-72.48C99.41,3,31.37,29.29,21.94,85.84c-2.09,12.76-1.36,77.89-1,90.46a7.79,7.79,0,0,1-15.57.44C5.33,175.59,6.17,145.92,5.51,107.58Z"
        style="fill:#a0d9d9"
      />
      <path
        d="M159.8,28.19C107.58-19.7,37.39,12.68,23.25,79.71c13.5-52.93,78.32-75.06,124-41,21,15.89,34.28,41.2,34.23,72.48v.06a3.49,3.49,0,0,0,3.21,3.48C191.8,84.8,182.52,50.63,159.8,28.19Z"
        style="fill:#f2f2f2"
      />
      <path
        d="M13.06,176.3a13,13,0,0,1,13,13L26,327.72a13,13,0,0,1-26,0L.07,189.27A13,13,0,0,1,13.06,176.3Z"
        style="fill:#f25f29"
      />
    </svg>
    <overlay
      :tool="tool"
      class="tool-scythe"
      :slected="selected"
      :class="{ 'tool-click': selected }"
      @toggle="selected = !selected"
    />
  </div>
</template>
<script>
import overlay from '~/components/overlay'
export default {
  components: {
    overlay
  },
  data() {
    return {
      tool: {
        name: 'scythe',
        description:
          '&#x1F354; Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate ab doloribus porro, accusantium sed ipsam sapiente,exercitationem eveniet itaque, nihil odit. Earum adipisci explicabo laborum, impedit nemo tempora magni placeat! Delectus accusamus et soluta, iure omnis voluptatum, facilis doloremque cum amet, odio ipsa rem voluptate? Accusamus illo quaerat eligendi in! Distinctio aliquid enim minus, incidunt voluptatem tempore! Numquam, dicta odio. Repellat, ipsum? Veniam sequi ratione qui recusandae! Dolorem sequi doloribus sapiente vitae natus eius nulla illo ullam repudiandae, laboriosam et sint ab facere reprehenderit exercitationem ipsa consequuntur fugit in. Nostrum. Ratione nulla architecto quos voluptatum maxime aliquid, tenetur mollitia cumque eveniet magni culpa corrupti fuga dignissimos cum quas, molestias eligendi consectetur natus laborum dolorem aspernatur ducimus autem. Consequatur, officiis est. Aut, quod eos est molestias facere alias. Laboriosam quo ex nihil pariatur cum, aliquam harum beatae exercitationem aliquid eum? Molestiae rerum nam quos ab quam aperiam saepe, ullam corporis quo.',
        svg: 'scythe'
      },
      selected: false
    }
  },
  methods: {
    select() {
      this.selected = true
    }
  }
}
</script>

<template>
  <div class="tool">
    <svg
      id="hoe"
      class="tool"
      xmlns="http://www.w3.org/2000/svg"
      width="158.39"
      height="679.15"
      viewBox="0 0 158.39 679.15"
      @click="select"
    >
      <g>
        <rect x="73.48" y="39.72" style="fill:#a0d9d9" />
        <path
          d="M69.53,75.58a4.63,4.63,0,0,0-4.63,4.63l-.3,582.52a14.46,14.46,0,1,0,28.92,0l.3-582.52a4.62,4.62,0,0,0-4.62-4.63H69.53Z"
          style="fill:#f25f29"
        />
        <path
          d="M158,33.34a4,4,0,0,1,.14.41A3.31,3.31,0,0,0,158,33.34Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M157.36,32.22,131.16-.19a4.62,4.62,0,0,0-3.59-1.71L30.86-1.95A4.56,4.56,0,0,0,27.27-.24L7.59,24.05l143.22.07Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M.21,36.43A4.69,4.69,0,0,1,0,35.15,4.69,4.69,0,0,0,.21,36.43Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M158.24,34a4.66,4.66,0,0,1,.12.63A4.66,4.66,0,0,0,158.24,34Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M.22,33.69a3.09,3.09,0,0,1,.14-.43A3.09,3.09,0,0,0,.22,33.69Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M0,34.51c0-.22.07-.43.12-.64C.1,34.08.06,34.29,0,34.51Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M.55,32.88c0-.06.07-.13.11-.2S.59,32.82.55,32.88Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M157.74,32.76c0,.07.06.14.1.2S157.78,32.83,157.74,32.76Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M158.36,34.59a4.66,4.66,0,0,0-.12-.63l-.07-.21a4,4,0,0,0-.14-.41h0a2.69,2.69,0,0,0-.19-.38c0-.06-.06-.13-.1-.2a4.8,4.8,0,0,0-.38-.54l-6.55-8.1L7.59,24.05h0L1,32.14a4,4,0,0,0-.37.54c0,.07-.07.14-.11.2s-.13.25-.19.37h0a3.09,3.09,0,0,0-.14.43l-.07.18c0,.21-.09.42-.12.64s0,.43,0,.64a4.69,4.69,0,0,0,.21,1.28A3.51,3.51,0,0,0,.45,37a4.63,4.63,0,0,0,4.18,2.64l68.85,0H85.05l68.71,0a4.62,4.62,0,0,0,4.18-2.63A4.69,4.69,0,0,0,158.36,34.59Z"
          style="fill:#fff"
        />
      </g>
    </svg>
    <overlay
      :tool="tool"
      class="tool-hoe"
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
        name: 'hoe',
        description:
          '&#x1F354; Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate ab doloribus porro, accusantium sed ipsam sapiente,exercitationem eveniet itaque, nihil odit. Earum adipisci explicabo laborum, impedit nemo tempora magni placeat! Delectus accusamus et soluta, iure omnis voluptatum, facilis doloremque cum amet, odio ipsa rem voluptate? Accusamus illo quaerat eligendi in! Distinctio aliquid enim minus, incidunt voluptatem tempore! Numquam, dicta odio. Repellat, ipsum? Veniam sequi ratione qui recusandae! Dolorem sequi doloribus sapiente vitae natus eius nulla illo ullam repudiandae, laboriosam et sint ab facere reprehenderit exercitationem ipsa consequuntur fugit in. Nostrum. Ratione nulla architecto quos voluptatum maxime aliquid, tenetur mollitia cumque eveniet magni culpa corrupti fuga dignissimos cum quas, molestias eligendi consectetur natus laborum dolorem aspernatur ducimus autem. Consequatur, officiis est. Aut, quod eos est molestias facere alias. Laboriosam quo ex nihil pariatur cum, aliquam harum beatae exercitationem aliquid eum? Molestiae rerum nam quos ab quam aperiam saepe, ullam corporis quo.',
        svg: 'hoe'
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

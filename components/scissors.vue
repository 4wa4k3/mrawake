<template>
  <div class="tool">
    <svg
      id="scissors"
      class="tool"
      xmlns="http://www.w3.org/2000/svg"
      width="76.35"
      height="460.56"
      viewBox="0 0 76.35 460.56"
      @click="select"
    >
      <g>
        <path
          d="M68.4,239.66c-.3-14.4-3-40-18.51-48.45,2.62-23.16,5.41-27.07,11.33-49.21,7.21-27.89,9.52-52.52,2.93-90.24C58.21,18.42,50.53,3.85,49.84,1.82A6.28,6.28,0,0,0,39,.64,6.27,6.27,0,0,0,28.17,1.86C28.12,2-1.34,69.42,15.21,136c4.06,18.27,9.49,26.45,12.86,55-8.31,4.22-12.67,12.82-15.13,22.87a131,131,0,0,0-3.31,24.87,16.15,16.15,0,0,1,6.27-1.29A15.79,15.79,0,0,1,24.37,240c-.85-9.92.48-21.35,4.05-29.51,2.18-4.59,4.56-6.54,7.91-7.12,7.61-.76,12.25.92,15.52,13.91A70.37,70.37,0,0,1,53.7,239a15.76,15.76,0,0,1,14.7.63ZM37.09,3.64a6.12,6.12,0,0,1,1.1-3,6.25,6.25,0,0,1,1.12,3C44.48,54.5,43,97.61,43,148.06v24.26l-9.56,0,0-24.26C33.41,97.44,31.92,54.46,37.09,3.64Zm-4,185.05a7.25,7.25,0,0,1,3.21-1.85,7.16,7.16,0,0,1,8.76,5.07,7.14,7.14,0,0,1-1.86,6.91,7.15,7.15,0,0,1-12-3.21,7.15,7.15,0,0,1,1.86-6.92Z"
          style="fill:#a0d9d9"
        />
        <path
          d="M33.42,172.28l9.56,0V148.06C43,97.61,44.48,54.5,39.31,3.68a6.25,6.25,0,0,0-1.12-3,6.12,6.12,0,0,0-1.1,3C31.92,54.46,33.41,97.44,33.4,148Z"
          style="fill:#fff"
        />
        <path
          d="M68.4,239.66a15.91,15.91,0,0,0-23.86,13.75l-.1,189.28a15.91,15.91,0,1,0,31.81,0l.1-189.29A15.89,15.89,0,0,0,68.4,239.66Z"
          style="fill:#f25f29"
        />
        <path
          d="M9.63,238.79A15.93,15.93,0,0,0,0,253.42L.1,442.7a15.91,15.91,0,1,0,31.81,0l-.1-189.28A16,16,0,0,0,15.9,237.5,16.15,16.15,0,0,0,9.63,238.79Z"
          style="fill:#f25f29"
        />
        <path
          d="M31.26,195.61a7.14,7.14,0,0,0,5.06,5.06,7.16,7.16,0,0,0,6.91-1.85,7.16,7.16,0,0,0-6.9-12,7.16,7.16,0,0,0-5.07,8.77Z"
          style="fill:#fff"
        />
      </g>
    </svg>
    <overlay
      :tool="tool"
      class="tool-scissors"
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
        name: 'scissors',
        description:
          '&#x1F354; Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate ab doloribus porro, accusantium sed ipsam sapiente,exercitationem eveniet itaque, nihil odit. Earum adipisci explicabo laborum, impedit nemo tempora magni placeat! Delectus accusamus et soluta, iure omnis voluptatum, facilis doloremque cum amet, odio ipsa rem voluptate? Accusamus illo quaerat eligendi in! Distinctio aliquid enim minus, incidunt voluptatem tempore! Numquam, dicta odio. Repellat, ipsum? Veniam sequi ratione qui recusandae! Dolorem sequi doloribus sapiente vitae natus eius nulla illo ullam repudiandae, laboriosam et sint ab facere reprehenderit exercitationem ipsa consequuntur fugit in. Nostrum. Ratione nulla architecto quos voluptatum maxime aliquid, tenetur mollitia cumque eveniet magni culpa corrupti fuga dignissimos cum quas, molestias eligendi consectetur natus laborum dolorem aspernatur ducimus autem. Consequatur, officiis est. Aut, quod eos est molestias facere alias. Laboriosam quo ex nihil pariatur cum, aliquam harum beatae exercitationem aliquid eum? Molestiae rerum nam quos ab quam aperiam saepe, ullam corporis quo.',
        svg: 'pruners'
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

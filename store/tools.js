export const state = () => ({
  all: [
    {
      id: '1',
      name: 'The Scythe a.k.a Awake',
      rating: 'Rating: &#127775; &#127775; &#127775; &#127775;',
      description:
        'The go to tool for the Grim Reaper. Great for whisking souls away or to guide them across the styx.',
      svg: 'scythe',
      selected: false
    },
    {
      id: '2',
      name: 'The Axe a.k.a bboyjf',
      rating: 'Rating: &#127775; &#127775; &#127775; &#127775;',
      description:
        'Chop that wood! The original shot gun, made popular by the vikings while they raped an pillaged through out the old continent.',
      svg: 'axe',
      selected: false
    },
    {
      id: '3',
      name: 'The HOE a.k.a Sindrro85',
      rating: 'Rating: &#128078; &#128078; &#128078;',
      description:
        '&#128584; &#128581; Why in the world would you choose the HOE. "I feel so safe now that I have this HOE" said no one ever!" There are no records of any notalbe figures using a HOE or than a farmer for HOEing. The HOE is so BASIC!!! If you are a HOE do yourself a favor and call 1-800-HELP-I-M-HOE. A HOETY HOE HOE from HOEville, USA; population 1. Who\'s the HOE now? &#128405;',
      svg: 'hoe',
      selected: false
    },
    {
      id: '4',
      name: 'The Pitchfork a.k.a CuNhell1029',
      rating: 'Rating: &#127775; &#127775; &#127775; &#127775;',
      description:
        "See you in Hell! Righfully so, last but not least. The favorite weopon of the father of all lies. Nothing symbolizes evil and wickedness like the fallen's one pitchfork.",
      svg: 'pitchfork',
      selected: false
    }
  ]
})

export const getters = {
  tools: (state) => state.all
}

export const mutations = {
  toolSelected: (state, payload) => {
    const tool = state.all.find((tool) => tool.id === payload)
    console.log(tool.id)
    tool.selected = !tool.selected
  }
}

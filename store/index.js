export const state = () => ({
  regions: [],
  typologies: [],
  isListView: true
})

export const mutations = {
  setRegions: (state, data) => {
    state.regions.push(...data)
  },
  setTypologies: (state, data) => {
    state.typologies.push(...data)
  },
  setIsListView (state, isListView) {
    state.isListView = isListView
  }
}
export const getters = {
  getIsListView (state) {
    return state.isListView
  }
}

export const actions = {
  async getRegions ({ state, commit }) {
    if (state.regions.length) { return }
    try {
      const res = await this.$axios.get('/api/v0/regions/')
      commit('setRegions', res.data)
    } catch (err) {
      console.error('[STORE] getRegions: ', err)
    }
  },
  async getTypologies ({ state, commit }) {
    if (state.typologies.length) { return }
    try {
      const res = await this.$axios.get('/api/v0/typologies/')
      commit('setTypologies', res.data)
    } catch (err) {
      console.error('[STORE] setTypologies: ', err)
    }
  }
}

export const state = () => ({
    Ypos: 0,
    lang: 'en'  
})

export const mutations = {
    setYpos (state, value) {
        state.Ypos = value
    },
    setLang (state, value) {
        state.lang = value
    }
}

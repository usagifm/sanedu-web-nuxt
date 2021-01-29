export const state = () => ({
    isAuth: false,
    access_token: null,
    loading: null
})


export const mutations = {

    SET_IS_AUTH(state, payload){
        state.isAuth = payload;
    },
    SET_API_TOKEN(state, payload){
        state.access_token = payload
    }


} 


export const actions = {

    nuxtServerInit({commit},context ){
        commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn);
        commit('SET_API_TOKEN', this.$auth.$storage._state["_token.local"] )
    }

}
import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
    state:{
        appealIndex:-1,
    },
    mutations:{
        changeAppeal(state){
            state.appealIndex++
        }
    }
})

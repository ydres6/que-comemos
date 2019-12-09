import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        consumoUsuarios: [],
        alimentos: [],
        //usuarioEncontrado: "no encontrado",
        //alimentoEncontrado: "no encontrado",
        ultimoMes: "",

       usuarios: {
        dni: 23149966,
        nombre: "carlos",   
       },
       usuarioEncontrado :"" 


    },


    mutations: {

        agregarConsumo: (state, consumoParaAgregar) => { state.consumoUsuarios.push(consumoParaAgregar) },
        agregarAlimento: (state, alimentoParaAgregar) => { state.alimentos.push(alimentoParaAgregar) },
        buscarDni: (state, idABuscar) => { state.usuarios.find(u => u.dni == idABuscar)},

        // buscarDni: (state, idABuscar) => { return state.usuario.find(u => u.dni == idABuscar) },
            },
    actions: {
        agregarConsumo: ({ commit }, consumoParaAgregar) => {
            commit('agregarConsumo', consumoParaAgregar)
        },
        agregarAlimento: ({ commit }, alimentoParaAgregar) => {
            commit('agregarAlimento', alimentoParaAgregar)
        },
        buscarDni: ({ commit }, idABuscar) => {
            commit('buscarDni', idABuscar)
        },
    },
    getters: {
        getConsumo: state => { return state.consumoUsuarios },
        getAlimento: state => { return state.alimentos },
        getUltimoMes: state => { return state.ultimoMes }
      
    }
})

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
        usuarios: []
    },


    mutations: {

        agregarConsumo: (state, consumoParaAgregar) => { state.consumoUsuarios.push(consumoParaAgregar) },
        agregarAlimento: (state, alimentoParaAgregar) => { state.alimentos.push(alimentoParaAgregar) },
        agregarUsuario: (state, usuarioParaAgregar) => { state.usuarios.push(usuarioParaAgregar) },
        //buscarUsuario: (state, idABuscar) => { return state.usuario.find(u => u.id == idABuscar) },
        //buscarAlimento: (state, idABuscar) => {return state.usuario.find(u => u.id == idABuscar)}
    },
    actions: {
        agregarConsumo: ({ commit }, consumoParaAgregar) => {
            commit('agregarConsumo', consumoParaAgregar)
        },
        agregarAlimento: ({ commit }, alimentoParaAgregar) => {
            commit('agregarAlimento', alimentoParaAgregar)
        },
        agregarUsuario: ({ commit }, usuarioParaAgregar) => {
            commit('agregarUsuario', usuarioParaAgregar)
        },
        buscarUsuario: ({ commit }, idABuscar) => {
            commit('buscarUsuario', idABuscar)
        },
    },
    getters: {
        getConsumo: state => { return state.consumoUsuarios },
        getAlimento: state => { return state.alimentos },
        getUltimoMes: state => { return state.ultimoMes },
        getUsuarios: state => { return state.usuarios },
    }
})

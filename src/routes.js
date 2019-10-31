
import Registro from './components/Registro.vue'
import Alimento from './components/Alimento.vue'
import Estadisticas from './components/Estadisticas.vue'
import Usuario from './components/Usuario.vue'
import Camara from './components/camara/Camara.vue'

export const routes = [

    { path: '/registro', component: Registro },
    { path: '/alimento', component: Alimento },
    { path: '/estadisticas', component: Estadisticas },
    { path: '/usuario', component: Usuario },
    { path: '/camara', name: "camara", component: Camara }
]


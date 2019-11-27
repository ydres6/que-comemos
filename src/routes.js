
import Registro from './components/Registro.vue'
import Alimento from './components/Alimento.vue'
import Estadisticas from './components/Estadisticas.vue'
import Usuario from './components/Usuario.vue'
import Camara from './components/camara/Camara.vue'
import Qr from './components/camara/Qr.vue'
import Ingreso from './components/Ingreso.vue'


export const routes = [

    { path: '/registro',name: "registro", component: Registro },
    { path: '/alimento', component: Alimento },
    { path: '/estadisticas', component: Estadisticas },
    { path: '/usuario',name: "usuario", component: Usuario },
    { path: '/camara', name: "camara", component: Camara },
    { path: '/qr', name: "qr", component: Qr },
    { path: '/ingreso', name: "ingreso", component: Ingreso }
]


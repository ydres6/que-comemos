<template>
  <div id="ingreso">

<b-form-input
        id="input-id"
        v-model="idBusqueda"
        required
        placeholder="Ingresa un DNI para ingresar"
      ></b-form-input>


        </div>
</template>

<script>
export default {
data() {
    return {
         Usuarios: [
        {
          id: 1,
          dni: 23149966,
          nombre: "carlos",
          apellido: "martinez"},
          {
          id: 2,
          dni: 30789456,
          nombre: "juan",
          apellido: "perez"},
          {
          id: 3,
          dni: 40562354,
          nombre: "matias",
          apellido: "alvarez"},
          {
          id: 4,
          dni: 10147896,
          nombre: "mario",
          apellido: "pez"}
         ]
    }
}//,
//methods: {
    //buscarUsuario(dni){
        //let i=0
        //resul = false
       // while(i<Usuarios.length){
         //   if (Usuarios.dni==dni){
               // resul = true
            //} else {
             //   resul = false
           // }
        //i++
       // }
       // return resul
    //}
//}

}

</script>
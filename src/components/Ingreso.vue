<template>
  <div id="ingreso">

<b-form-input
        id="input-id"
        v-model="dni_de_busqueda"
        required
        placeholder="Ingresa un DNI para ingresar"
        
      ></b-form-input>
<p>Dni buscado: {{ dni_de_busqueda}}</p>
<button type="button" @click="validarDni()">Validar</button>
      

  
<ul id="busco">
  <li v-for= "usuario in Usuarios" v-bind:key="type">
    
    {{usuario.dni}}
  </li>
</ul>


        </div>
</template>

<script>
export default {
data() {
    return {
      dni_de_busqueda: '',
      
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
}}//,
//methods: {
    //buscarUsuario(dni_de_busqueda){
     //   let i=0
     //   let estado=false
    //    let resul =null
    //    while(i<Usuarios.length&&estado==false){
      //    if (Usuarios[i].dni==dni_de_busqueda){
        //        estado = true
      ///          resul = usuario.nombre
        //   }else {
              
      //        i++
      //     }
        
     //   }
    //    return resul
  //  },
   // validarDni(){

   //   if (buscarUsuario == null){
   //     this.$router.push({name:'registro'})}
    //    else{
   //       this.$router.push({name:'usuario'})
   //     }
   //   return
  //    }
 //   }
//}



</script>
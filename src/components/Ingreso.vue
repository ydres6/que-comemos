<template>
<div>
  <input v-model="message" placeholder="Ingrese su DNI">
<p>El mensaje es: {{ message }}</p>

<button type ="button" @click ="guardarDni()">Validar DNI</button>

  </div>      
</template>

<script>
export default {
data() {
    return {

methods :{

guardarDni(){
this.$store.dispach("buscarDni",this.message)

}


},

      message : ""
//           dni: 23149966,
//           nombre: "carlos",
//           apellido: "martinez"},
//           {
//           id: 2,
//           dni: 30789456,
//           nombre: "juan",
//           apellido: "perez"},
//           {
//           id: 3,
//           dni: 40562354,
//           nombre: "matias",
//           apellido: "alvarez"},
//           {
//           id: 4,
//           dni: 10147896,
//           nombre: "mario",
//           apellido: "pez"}
//          ]
     }
 }}



</script>
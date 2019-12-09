<template>
  <div id="p">
  

    <p v-if="error !== null" class="drop-error">
      {{ error }}
    </p>
  



    <qrcode-drop-zone @detect="onDetect" @dragover="onDragOver" @init="logErrors">
      <div class="drop-area" :class="{ 'dragover': dragover }">
        Arrastra la imagen hasta aqui
      </div>
    </qrcode-drop-zone>

  <h3 v-if="(this.ok)"> Detalle</h3>
  <table id="tabla" v-if="(this.ok)" class="table table-striped">

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Alimento</th>
      <th scope="col">Calorias</th>
     <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{{ atributos.alimento }}</td>    
      <td>{{ atributos.calorias }}</td> 
      <td>{{ atributos.fecha }}</td>
    </tr>
  </tbody>
</table>
    <p v-if="(this.enviado)">Datos guardados</p>
    <b-button type="submit" variant="primary" v-if="(this.ok)" @click="guardarDatos()">Guardar Datos</b-button>
  </div>
 
</template>

<script>
import { QrcodeDropZone } from 'vue-qrcode-reader'

export default {

  components: { QrcodeDropZone },

  data () {
    return {
      ok:false,
      enviado:false,
      result: "",
      error: null,
      dragover: false
    }
  },
   computed: {
    // a computed getter
   atributos: function () {
   //  // `this` points to the vm instance
   
    return this.result
  }},
  

  methods: {
    async onDetect (promise) {
      try {
        const { content } = await promise

        this.result = JSON.parse(content)
        this.error = null
        this.enviado=false
        this.ok=true
      } catch (error) {
        if (error.name === 'DropImageFetchError') {
          this.error = 'Sorry, you can\'t load cross-origin images :/'
        } else if (error.name === 'DropImageDecodeError') {
          this.error = 'Ok, that\'s not an image. That can\'t be decoded.'
        } else {
          this.error = 'Ups, what kind of error is this?! ' + error.message
        }
      }
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    onDragOver (isDraggingOver) {
      this.dragover = isDraggingOver
    },

    guardarDatos(){
      //var nuevoAlimento = JSON.parse(this.result)
      this.$store.dispatch('agregarAlimento', this.result)
      this.$store.dispatch('agregarConsumo', Number(this.result.calorias))
      this.result =  ""
      this.ok = false
      this.enviado= true
    }
  }
}


</script>

<style>


#tabla {

  text-align: center;

}
.drop-area {
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 200px;

  background-color: rgba(0,0,0,.5);
}

.dragover {
  background-color: rgba(0,0,0,.8);
}

.drop-error {
  color: red;
  font-weight: bold;
}
</style>
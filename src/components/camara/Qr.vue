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
    
    <h3 v-if="(this.ok)"> Datos del alimento a subir</h3>
    <p v-if="(this.ok)">Nombre del alimento: {{ atributos.alimento }}</p>
    <p v-if="(this.ok)">Calorias: {{ atributos.calorias }}</p>
    <p v-if="(this.ok)">Fecha: {{ atributos.fecha }}</p>

    <button v-if="(this.ok)" type="button" @click="guardarDatos()">¿Quiere guardar estos datos?</button>
  </div>
 
</template>

<script>
import { QrcodeDropZone } from 'vue-qrcode-reader'

export default {

  components: { QrcodeDropZone },

  data () {
    return {
      ok:false,
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
    }
  }
}


</script>

<style>





.drop-area {

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
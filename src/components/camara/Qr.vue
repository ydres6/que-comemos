<template>
  <div>
    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <p v-if="error !== null" class="drop-error">
      {{ error }}
    </p>
   <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>

    <qrcode-drop-zone @detect="onDetect" @dragover="onDragOver" @init="logErrors">
      <div class="drop-area" :class="{ 'dragover': dragover }">
        DROP SOME IMAGES HERE
      </div>
    </qrcode-drop-zone>
    <button type="button" @click="guardarDatos()">Guardar datos</button>
  </div>
</template>

<script>
import { QrcodeDropZone } from 'vue-qrcode-reader'

export default {

  components: { QrcodeDropZone },

  data () {
    return {
      message:"hola",
      result: null,
      error: null,
      dragover: false
    }
  },
   //computed: {
    // a computed getter
   // reversedMessage: function () {
   //   // `this` points to the vm instance
    //  return this.message.split('').reverse().join('')
   // },

  methods: {
    async onDetect (promise) {
      try {
        const { content } = await promise

        this.result = content
        this.error = null
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
      var nuevoAlimento = JSON.parse(this.result)
      this.$store.dispatch('agregarAlimento', nuevoAlimento)
      this.$store.dispatch('agregarConsumo', Number(nuevoAlimento.calorias))
      this.result =  ""
    }
  }
}


</script>

<style>
.drop-area {
  height: 300px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px;

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
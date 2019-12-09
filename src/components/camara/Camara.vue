<template>
  <div id="camara">
    <h1>Camara</h1>
    <vue-web-cam ref="webcam"></vue-web-cam>
    <hr>
    <img :src="photo">
    <hr>
    <button type="button" @click="take_photo()">Take Photo</button>
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";

export default {
  components: {
    "vue-web-cam": WebCam
  },
  data() {
    return {
      photo: null
    };
  },
  methods: {
    take_photo() {
      this.photo = this.$refs.WebCam.getPhoto();
    }
  }
};
</script>
<style >
#camara{
    
    display: inline-block;
    text-align: center;
 }
</style>
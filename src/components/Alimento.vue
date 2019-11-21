<template>
  <div id="alimento">
    <h2>Alimento</h2>
    <button
            class="btn btn-primary"
            @click="solicitarCamara()"
          >Solicitar Camara</button>
  </div>
</template>

<script>
export default {
  methods: {
    solicitarCamara(){
        this.$router.push({name:'qr'})
    }
  }
};
</script>

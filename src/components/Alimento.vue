<template>
  <div id="alimento">
    <h1>Alimento</h1>
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
        this.$router.push({name:'camara'})
    }
  }
};
</script>

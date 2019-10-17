<template>
  <div id="login">
      <h1>login</h1>
      <button type="button" @click="registrar()">qr</button>
      <router-link to='/registro' tag="button">registrar</router-link>
     
      <router-view></router-view>
</div>
</template>

<script>
export default {

    methods:{
        registrar(){
             this.$router.push({ path: '/registro' })
    }
    }
}

</script>

<style>

</style>
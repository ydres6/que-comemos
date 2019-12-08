<template>
  <div id="app">
    <h1>principal</h1>
    
    <ul class="nav nav-pills nav-fill">
      <router-link to="/ingreso" tag="li" exact class="nav-link">ingresar</router-link>
      
      <router-link to="/alimento" tag="li" exact class="nav-link">alimento</router-link>
      <router-link to="/estadisticas" tag="li" exact class="nav-link">estadisticas</router-link>
    </ul>
    
    <router-view></router-view>
   
  </div>
</template>

<script>


export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

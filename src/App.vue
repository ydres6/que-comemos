<template>
  <div id="app">
  <div id="titulo">
  <img src="./1912695.png" width="60px" height="60px" margin-top="10px">
  <h1>Que Comemos!</h1>
  </div>  
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
        <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
   
    </b-navbar-brand>
  </b-navbar>
      <ul id="botones" class="nav nav-pills nav-fill">
      <router-link to="/registro" tag="li" exact class="nav-link">Registrar</router-link>
      <router-link to="/alimento" tag="li" exact class="nav-link">Alimento</router-link>
      <router-link to="/estadisticas" tag="li" exact class="nav-link">Estadisticas</router-link>
    </ul>
     
   
    </b-navbar-nav>
  </b-navbar>
   <router-view></router-view>
</div>

  
  
  
  
  
  
  <!-- <div id="app">
    <h1>Que comemos</h1>
    
    <ul class="nav nav-pills nav-fill">
      
      <router-link to="/registro" tag="li" exact class="nav-link">registrar</router-link>
      <router-link to="/alimento" tag="li" exact class="nav-link">alimento</router-link>
      <router-link to="/estadisticas" tag="li" exact class="nav-link">estadisticas</router-link>
    </ul>
    
    <router-view></router-view>
   
  </div> -->
</template>

<script>


export default {
  name: "app",
  components: {}
};
</script>

<style>




#titulo{
  
background-color: #2c3e50;
color:aliceblue;
padding-bottom: 15px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

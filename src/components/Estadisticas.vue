<template>
  <div id="estadisticas">
    <h2>estadisticas</h2>

    <highcharts :options="chartOptions"></highcharts>
    

    <b-form-group id="input-group-id" label="Busqueda por ID:" label-for="input-id">
      <b-form-input
        id="input-id"
        v-model="idBusqueda"
        required
        placeholder="Ingresa un ID para buscar"
      ></b-form-input>
    </b-form-group>
    <button type="button" @click="cambiarDatos()">Buscar</button>
    <hr>
    <button type="button" @click="probarStore()">Traer Datos</button>
    <button type="button" @click="probarAlimentos()">Traer semana</button>
    <p class="decode-result">Last result: <b>{{ temp2}}</b></p>
    <p1></p1>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts, { numberFormat } from "highcharts";
let moment = require('moment');

Highcharts.setOptions({
  title: {
    text: "Calorias consumidas ultimo mes"
  }
});

export default {
  name: "Estadisticas",
  components: {
    highcharts: Chart
  },
  data() {
    return {
      idBusqueda: "",
      chartOptions: {
        series: [
          {
            data: [] // sample data
          }
        ]
      },
      temp2:[],
      temp:[0,0,0,0,0,0,0]
      
       
      
    };
  },
  methods: {
 
    probarStore(){
      this.chartOptions.series = { data:  this.$store.getters.getConsumo }
      
    },

    probarAlimentos(){
      //this.temp2= this.$store.getters.getAlimento
      let vector = []
      vector = this.$store.getters.getAlimento
      let i=0
      let d=0
      this.temp2= Object.keys(vector).length
      while (i < Object.keys(vector).length) {
        
      d = moment(vector[i].fecha).day()
      this.temp[d]+= Number(vector[i].calorias)
      
      i++
     }
      
      this.chartOptions.series = { data: this.temp}
    },
    
  }
}

</script>
<template>
  <div id="estadisticas">
    <h2>estadisticas</h2>

    <highcharts :options="chartOptions"></highcharts>
    

    
   
  
    <button type="button" @click="probarStore()">Traer Datos</button>
    <button type="button" @click="mostrarUltimaSemana()">Mostrar ultima semana</button>
    
    <p1></p1>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts, { numberFormat } from "highcharts";
let moment = require('moment');

Highcharts.setOptions({
  title: {
    text: "Calorias consumidas"
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
      temp:[]
      
       
      
    };
  },
  methods: {
 
    probarStore(){
      this.chartOptions.series = { data:  this.$store.getters.getConsumo }
      
    },

    mostrarUltimaSemana(){
     
      this.temp=[0,0,0,0,0,0,0]
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
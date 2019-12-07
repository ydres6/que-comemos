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
    <p1></p1>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
//let moment = require('moment');

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
      Usuarios: [
        {
          id: 1,
          dni: 356,
          nombre: "carlos",
          apellido: "martinez",
          consumidos: [
            {
              alimento: "lechuga",
              calorias: 325,
              fecha: "2019-10-21 "
            },
            {
              alimento: "pollo",
              calorias: 195,
              fecha: "2019-10-24 "
            },
            {
              alimento: "tomate",
              calorias: 37,
              fecha: "2019-10-31 "
            },
            {
              alimento: "pizza",
              calorias: 277,
              fecha: "2019-10-24 "
            },
            {
              alimento: "queso",
              calorias: 244,
              fecha: "2019-11-04 "
            },
            {
              alimento: "papa",
              calorias: 62,
              fecha: "2019-10-13 "
            },
            {
              alimento: "pizza",
              calorias: 169,
              fecha: "2019-10-08 "
            },
            {
              alimento: "papa",
              calorias: 89,
              fecha: "2019-11-06 "
            },
            {
              alimento: "papa",
              calorias: 51,
              fecha: "2019-10-13 "
            },
            {
              alimento: "tomate",
              calorias: 267,
              fecha: "2019-10-21 "
            },
            {
              alimento: "lechuga",
              calorias: 60,
              fecha: "2019-11-03 "
            },
            {
              alimento: "pollo",
              calorias: 306,
              fecha: "2019-10-07 "
            },
            {
              alimento: "pollo",
              calorias: 265,
              fecha: "2019-10-21 "
            },
            {
              alimento: "papa",
              calorias: 169,
              fecha: "2019-10-30 "
            },
            {
              alimento: "papa",
              calorias: 44,
              fecha: "2019-10-26 "
            },
            {
              alimento: "pizza",
              calorias: 453,
              fecha: "2019-11-04 "
            },
            {
              alimento: "papa",
              calorias: 121,
              fecha: "2019-10-23 "
            },
            {
              alimento: "pollo",
              calorias: 31,
              fecha: "2019-10-03 "
            },
            {
              alimento: "papa",
              calorias: 283,
              fecha: "2019-10-27 "
            },
            {
              alimento: "tomate",
              calorias: 51,
              fecha: "2019-10-04 "
            },
            {
              alimento: "lechuga",
              calorias: 243,
              fecha: "2019-10-13 "
            },
            {
              alimento: "tomate",
              calorias: 86,
              fecha: "2019-10-21 "
            },
            {
              alimento: "tomate",
              calorias: 145,
              fecha: "2019-10-31 "
            },
            {
              alimento: "queso",
              calorias: 210,
              fecha: "2019-10-09 "
            },
            {
              alimento: "lechuga",
              calorias: 157,
              fecha: "2019-10-05 "
            },
            {
              alimento: "pizza",
              calorias: 264,
              fecha: "2019-10-17 "
            },
            {
              alimento: "queso",
              calorias: 469,
              fecha: "2019-10-27 "
            },
            {
              alimento: "pollo",
              calorias: 37,
              fecha: "2019-10-30 "
            },
            {
              alimento: "lechuga",
              calorias: 273,
              fecha: "2019-10-28 "
            },
            {
              alimento: "lechuga",
              calorias: 105,
              fecha: "2019-10-20 "
            },
            {
              alimento: "pizza",
              calorias: 391,
              fecha: "2019-10-20 "
            },
            {
              alimento: "pollo",
              calorias: 452,
              fecha: "2019-10-11 "
            },
            {
              alimento: "papa",
              calorias: 416,
              fecha: "2019-10-07 "
            },
            {
              alimento: "queso",
              calorias: 340,
              fecha: "2019-10-03 "
            },
            {
              alimento: "queso",
              calorias: 257,
              fecha: "2019-10-28 "
            },
            {
              alimento: "pizza",
              calorias: 281,
              fecha: "2019-10-13 "
            },
            {
              alimento: "pollo",
              calorias: 369,
              fecha: "2019-10-16 "
            },
            {
              alimento: "pizza",
              calorias: 464,
              fecha: "2019-10-10 "
            }
          ]
        },
        {
          id: 2,
          dni: 356,
          nombre: "carlos",
          apellido: "martinez",
          consumidos: [
            {
              alimento: "lechuga",
              calorias: 500,
              fecha: "2019-10-9 "
            },
            {
              alimento: "pollo",
              calorias: 395,
              fecha: "2019-10-24 "
            },
            {
              alimento: "pizza",
              calorias: 700,
              fecha: "2019-10-10 "
            },
            {
              alimento: "queso",
              calorias: 600,
              fecha: "2019-10-5 "
            }
          ]
        }
      ]
    };
  },
  methods: {
    buscarUsuario(key, inputArray) {
      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].id == key) {
          return inputArray[i];
        }
      }
    },
    probarStore(){
      this.chartOptions.series = { data:  this.$store.getters.getConsumo }
    },
    cambiarDatos() {
      //let arrayCalorias = []
      let arrayCaloriasUltMes = [4];
      let i = 0;
      let antUnaSem =Date.parse("2019-10-22")
      let antDosSem = Date.parse("2019-10-15")
      let antTresSem =Date.parse( "2019-10-8")
      let antCuatroSem =Date.parse( "2019-10-1")
     
      

      const result = this.Usuarios[this.idBusqueda - 1];

     // while (i < result.consumidos.length) {
          
          // arrayCalorias[i] = result.consumidos[i].calorias;
          
        
      
     // i++;
    // }
     
          arrayCaloriasUltMes[3]=0
          arrayCaloriasUltMes[2]=0
          arrayCaloriasUltMes[1]=0
          arrayCaloriasUltMes[0]=0
      while (i < result.consumidos.length) {
          let time=Date.parse(result.consumidos[i].fecha)
          
          
        if (time>antUnaSem){
        arrayCaloriasUltMes[3] += result.consumidos[i].calorias
          }
         if (time<antUnaSem&&time>antDosSem){
        arrayCaloriasUltMes[2] += result.consumidos[i].calorias
         }
         if (time<antDosSem&&time>antTresSem){
         arrayCaloriasUltMes[1] += result.consumidos[i].calorias
         }
          if (time<antTresSem&&time>antCuatroSem){
          arrayCaloriasUltMes[0] += result.consumidos[i].calorias
          }
         
          
        i++
     }
     

      this.chartOptions.series = { data: arrayCaloriasUltMes };
    }
  }
}

</script>
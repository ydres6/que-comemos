<template>
  <div id="estadisticas">
    <h1>estadisticas</h1>
    

    <highcharts :options="chartOptions"></highcharts>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from 'highcharts';

Highcharts.setOptions({
 title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    }
})

export default {
  name: "Estadisticas",
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [5, 2, 3] // sample data
          }
        ]
      },
      usuarios: { "Usuarios": {
              "dni": 567,
              "nombre": "carlos",
              "apellido": "martinez",
              "consumidos": [
  {
    "alimento": "lechuga",
    "calorias": 325,
    "fecha": "2019-10-21 "
  },
  {
    "alimento": "pollo",
    "calorias": 195,
    "fecha": "2019-10-24 "
  },
  {
    "alimento": "tomate",
    "calorias": 37,
    "fecha": "2019-10-31 "
  },
  {
    "alimento": "pizza",
    "calorias": 277,
    "fecha": "2019-10-24 "
  },
  {
    "alimento": "queso",
    "calorias": 244,
    "fecha": "2019-11-04 "
  },
  {
    "alimento": "papa",
    "calorias": 62,
    "fecha": "2019-10-13 "
  },
  {
    "alimento": "pizza",
    "calorias": 169,
    "fecha": "2019-10-08 "
  },
  {
    "alimento": "papa",
    "calorias": 89,
    "fecha": "2019-11-06 "
  },
  {
    "alimento": "papa",
    "calorias": 51,
    "fecha": "2019-10-13 "
  },
  {
    "alimento": "tomate",
    "calorias": 267,
    "fecha": "2019-10-21 "
  },
  {
    "alimento": "lechuga",
    "calorias": 60,
    "fecha": "2019-11-03 "
  },
  {
    "alimento": "pollo",
    "calorias": 306,
    "fecha": "2019-10-07 "
  },
  {
    "alimento": "pollo",
    "calorias": 265,
    "fecha": "2019-10-21 "
  },
  {
    "alimento": "papa",
    "calorias": 169,
    "fecha": "2019-10-30 "
  },
  {
    "alimento": "papa",
    "calorias": 44,
    "fecha": "2019-10-26 "
  },
  {
    "alimento": "pizza",
    "calorias": 453,
    "fecha": "2019-11-04 "
  },
  {
    "alimento": "papa",
    "calorias": 121,
    "fecha": "2019-10-23 "
  },
  {
    "alimento": "pollo",
    "calorias": 31,
    "fecha": "2019-10-03 "
  },
  {
    "alimento": "papa",
    "calorias": 283,
    "fecha": "2019-10-27 "
  },
  {
    "alimento": "tomate",
    "calorias": 51,
    "fecha": "2019-10-04 "
  },
  {
    "alimento": "lechuga",
    "calorias": 243,
    "fecha": "2019-10-13 "
  },
  {
    "alimento": "tomate",
    "calorias": 86,
    "fecha": "2019-10-21 "
  },
  {
    "alimento": "tomate",
    "calorias": 145,
    "fecha": "2019-10-31 "
  },
  {
    "alimento": "queso",
    "calorias": 210,
    "fecha": "2019-10-09 "
  },
  {
    "alimento": "lechuga",
    "calorias": 157,
    "fecha": "2019-10-05 "
  },
  {
    "alimento": "pizza",
    "calorias": 264,
    "fecha": "2019-10-17 "
  },
  {
    "alimento": "queso",
    "calorias": 469,
    "fecha": "2019-10-27 "
  },
  {
    "alimento": "pollo",
    "calorias": 37,
    "fecha": "2019-10-30 "
  },
  {
    "alimento": "lechuga",
    "calorias": 273,
    "fecha": "2019-10-28 "
  },
  {
    "alimento": "lechuga",
    "calorias": 105,
    "fecha": "2019-10-20 "
  },
  {
    "alimento": "pizza",
    "calorias": 391,
    "fecha": "2019-10-20 "
  },
  {
    "alimento": "pollo",
    "calorias": 452,
    "fecha": "2019-10-11 "
  },
  {
    "alimento": "papa",
    "calorias": 416,
    "fecha": "2019-10-07 "
  },
  {
    "alimento": "queso",
    "calorias": 340,
    "fecha": "2019-10-03 "
  },
  {
    "alimento": "queso",
    "calorias": 257,
    "fecha": "2019-10-28 "
  },
  {
    "alimento": "pizza",
    "calorias": 281,
    "fecha": "2019-10-13 "
  },
  {
    "alimento": "pollo",
    "calorias": 369,
    "fecha": "2019-10-16 "
  },
  {
    "alimento": "pizza",
    "calorias": 464,
    "fecha": "2019-10-10 "
  }
]

              }
    }
    };
  }
};
</script>
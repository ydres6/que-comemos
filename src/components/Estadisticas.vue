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
      }
    };
  }
};
</script>
<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    class="h-full mb-4"
  />
  
  <URange v-model="zones" :min=0 :max=10 />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const props = defineProps(['rows'])
const zones = useState('zones', () => 4)
const max = 20

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = computed(() => {
  const arr = ref([])

  const labels = ref([])

  for(let i = 0; i < zones.value; i++) {
    arr.value.push(0)
    const minv = Math.round(i*max/zones.value)
    const maxv = Math.round((i+1)*max/zones.value)
    labels.value.push(`${minv} - ${maxv}`)
  }
  arr.value.forEach(el => el = 0)

  props.rows.forEach(el => {
    arr.value[Math.round(el / (max/zones.value))-1] ++
  })

  return {
    labels: labels.value,
    datasets: [ { data: arr.value, backgroundColor: 'rgba(0,0,255,0.2)' } ] 
  }
})
      
const chartOptions = {
  responsive: true,
  plugins: {
    legend: false
  }
}

</script>
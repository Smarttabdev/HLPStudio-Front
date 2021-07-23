import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['CompanyA', 'CompanyB', 'CompanyC', 'CompanyD', 'CompanyE', 'CompanyF', 'CompanyG'],
      datasets: [
        {
          label: 'Lead',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          borderCapStyle: 'round',
          data: [160, 591, 280, 81, 56, 55, 40]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}

import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        labels: Array,
        datalabel: {
            type: String,
            default: 'Valuation',
            display: false
        },
        legend: {
            display: false
        },
        chartdata: Array
    },
    data() {
        return {
            gradient: null
        }
    },
    mounted() {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(55, 15, 55, 250)

        console.log(this.chartdata, this.labels, '----------------')

        this.gradient.addColorStop(1, '#29a7f140')
        this.gradient.addColorStop(0, '#29a7f199');


        this.renderChart({
            labels: this.labels,
            datasets: [
                {
                    label: this.datalabel,
                    borderColor: '#29a7f1',
                    borderWidth: 3,
                    backgroundColor: this.gradient,
                    data: this.chartdata
                }
            ]
        }, { responsive: true, maintainAspectRatio: false })

    },
    updated() {
        console.log(this.chartdata, this.labels, '----------------')
        
    }
}
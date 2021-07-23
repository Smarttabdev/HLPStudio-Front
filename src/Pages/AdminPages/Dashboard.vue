<template>
  <div class="dashboard">
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6" xl="4" cols="12" sm="6">
        <div class="card mb-3 widget-content bg-asteroid">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading fsize-2 ">Number of Valuations</div>
              <div class="widget-subheading" v-if="admin === 'admin'">all companies</div>
              <div class="widget-subheading" v-if="admin === 'company'">my company</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>{{allValuation}}</span>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col md="12" lg="12" sm="12" cols="12" class="mb-3">
        <div class="card p-3">
          <div class="card-header row m-0 p-0">
            <b-col md="6" sm="12" cols="12" class="row m-0">
              <b-col md="6" sm="10" cols="12" class="p-0">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div class="prepend-icon">
                      <i class='fas fa-calendar text-black-50'></i>
                    </div>
                    <v-text-field
                      class="pt-0"
                      v-model="valuationStart"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="valuationStart"
                    @input="menu = false"
                    @change="valuationStartChange"
                  ></v-date-picker>
                </v-menu>
              </b-col>
              <b-col md="6" sm="6" cols="12" class="p-0">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div class="prepend-icon text-transform-none text-black-50">
                      To
                    </div>
                    <v-text-field
                      class="pt-0"
                      v-model="valuationEnd"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="valuationEnd"
                    @input="menu1 = false"
                    @change="valuationEndChange"
                  ></v-date-picker>
            </v-menu>
              </b-col>
            </b-col>
            <b-col md="6" sm="12" cols="12" class="text-right">
              <h4 class="text-transform-none font-weight-bold">Valuations per day</h4> 
            </b-col>
           
          </div>
          <div class="widget-chart p-0">
            <!-- <chart1 :labels="valuationLabels" :chartdata="valuationChartData" /> -->
           <big-chart class="mt30 height-300" 
              ref="bigChart"
              chart-id="big-line-chart"
              :chart-data="valuationChart.chartData"
              :gradient-colors="valuationChart.gradientColors"
              :gradient-stops="valuationChart.gradientStops"
              :extra-options="valuationChart.extraOptions">
            </big-chart>
          </div>
        </div>
      </b-col>
      <b-col md="6" xl="4" cols="12" sm="6" class="mt-3">
        <div class="card mb-3 widget-content bg-danger">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading fsize-2 ">Number of Leads</div>
              <div class="widget-subheading" v-if="admin === 'admin'">all companies</div>
              <div class="widget-subheading" v-if="admin === 'company'">my company</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>{{allLeads}}</span>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="12" lg="12" sm="12" cols="12" class="mb-3 ">
        <div class="card p-3">
          <div class="card-header p-0 m-0 row">
            <b-col md="6" sm="10" cols="12" class="row m-0">
              <b-col md="6" sm="6" cols="12" class="p-0">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div class="prepend-icon">
                      <i class='fas fa-calendar text-black-50'></i>
                    </div>
                    <v-text-field
                      class="pt-0"
                      v-model="leadStart"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="leadStart"
                    @input="menu2 = false"
                    @change="leadStartChange"
                  ></v-date-picker>
                </v-menu>
              </b-col>
              <b-col md="6" sm="6" cols="12" class="p-0">
                <v-menu
                  v-model="menu3"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div class="prepend-icon text-transform-none text-black-50">
                      To
                    </div>
                    <v-text-field
                      class="pt-0"
                      v-model="leadEnd"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="leadEnd"
                    @input="menu3 = false"
                    @change="leadEndChange"
                  ></v-date-picker>
                </v-menu>
              </b-col>
            </b-col>
            <b-col md="6" sm="12" cols="12" class="text-right">
              <h4 class="text-transform-none font-weight-bold" v-if="admin === 'admin'">Leads per company</h4> 
              <h4 class="text-transform-none font-weight-bold" v-if="admin === 'company'">Leads per day</h4>
            </b-col> 
          </div>
          <div class="widget-chart p-0">
              <big-chart class="mt30 height-300" 
              ref="leadChart"
              chart-id="big-line-chart"
              :chart-data="leadChart.chartData"
              :gradient-colors="leadChart.gradientColors"
              :gradient-stops="leadChart.gradientStops"
              :extra-options="leadChart.extraOptions">
            </big-chart>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment';

import BigChart from "@/Layout/Components/Chart/BigChart";
import * as chartConfigs from '@/Layout/Components/Chart/config';
import config from '@/config/color';
import PageTitle from "@/Layout/Components/PageTitle.vue";

import * as AdminService from '@/services/admin.service';

const today = moment(new Date()).format('YYYY-MM-DD');
const startDate = moment(new Date().setMonth(new Date().getMonth() - 1 )).format('YYYY-MM-DD');

export default {
  components: {
    PageTitle,
    BigChart
  },
  data: () => ({
    heading: "Dashboard",
    subheading: "multiple types of graphs, task list, updates, etc",
    icon: "pe-7s-home  icon-gradient bg-mean-fruit",
    admin: '',
    valuationStart: startDate,
    valuationEnd: today,
    leadStart: startDate,
    leadEnd: today,
    menu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    date: new Date().toISOString().substr(0, 10),
    allValuation: '',
    allLeads: '',
    valuationChart: {
      allData: [],
      activeIndex: 0,
      chartData: {
        datasets: [{ }],
        labels: [],
      },
      extraOptions: chartConfigs.lineChartOptions,
      gradientColors: config.colors.darkGradient,
      gradientStops: [1, 0.4, 0],
      categories: []
    },
    leadChart: {
      allData: [],
      activeIndex: 0,
      chartData: {
        datasets: [{ }],
        labels: [],
      },
      extraOptions: chartConfigs.lineChartOptions,
      gradientColors: config.colors.dangerGradient,
      gradientStops: [1, 0.4, 0],
      categories: []
    },
 

  }),
  methods: {
    initValuationChart(index) {
      let chartData = {
        datasets: [{
          fill: true, 
          borderColor: config.colors.dark,
          borderWidth: 5,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.dark,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: config.colors.dark,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.valuationChart.allData
        }],
        labels: this.valuationChart.chartData.labels
      }
      this.$refs.bigChart.updateGradients(chartData);
      this.valuationChart.chartData = chartData;
      this.valuationChart.activeIndex = index;
    },
    initLeadChart(index) {
      let chartData = {
        datasets: [{
          fill: true, 
          borderColor: config.colors.danger,
          borderWidth: 5,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.danger,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: config.colors.danger,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.leadChart.allData
        }],
        labels: this.leadChart.chartData.labels
      }
      this.$refs.leadChart.updateGradients(chartData);
      this.leadChart.chartData = chartData;
      this.leadChart.activeIndex = index;
    },
    getValuation(startDate, endDate) {
      AdminService.getValuation({startDate, endDate}).then(res => {
        console.log(res, 'valuation')
        this.valuationChart.allData = res.data.graphData.map(v => v.count);
        this.valuationChart.chartData.datasets =  [{
            fill: true, 
            borderColor: config.colors.dark,
            borderWidth: 5,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.dark,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.dark,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: res.data.graphData.map(v => v.count)
          }];
        this.valuationChart.chartData.labels = res.data.graphData.map(v => v.date);
        this.allValuation = res.data.all;
        this.initValuationChart(0);
      })
    },
    getLead(startDate, endDate) {
      AdminService.getLead({startDate, endDate}).then(res => {
        console.log(res)
        this.leadChart.allData = res.data.graphData.map(v => v.count);
        this.leadChart.chartData.datasets =  [{
            fill: true, 
            borderColor: config.colors.danger,
            borderWidth: 5,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: res.data.graphData.map(v => v.count)
          }];
        this.leadChart.chartData.labels = res.data.graphData.map(v => v.date);
        this.allLeads = res.data.all;
        this.initLeadChart(0);
      })
    },
    valuationEndChange(e) {
    this.getValuation(this.valuationStart, e);
    },
    valuationStartChange(e){
      this.getValuation(e, this.valuationEnd);
    },
    leadEndChange(e) {
    this.getLead(this.leadStart, e);
    },
    leadStartChange(e){
      this.getLead(e, this.leadEnd);
    }
  },
  beforeMount() {
    if(this.$store.state.user){
      this.admin =this.$store.state.user.role;
    }
    this.getValuation(startDate, today);
    this.getLead(startDate, today);

  }
}
</script>
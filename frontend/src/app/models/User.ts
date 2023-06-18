import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexPlotOptions, ApexYAxis, ApexFill, ApexDataLabels, ApexStroke} from "ng-apexcharts";
export class User {
  ime: string = '';
  prezime: string = '';
  datumRodjenja: string = '';
  grad: string = '';
  telefon: number = 0;
  email: string = '';
  kor_ime: string = '';
  lozinka: string = '';
  tip: string = '';
  selectedAgency: string = '';
  licenca: number = 0;
  omiljeniOglasi: string[] = [];
  slike: Slika[] = [];
}

export interface Slika {
  name: string;
  source: string;
}

export interface LoggedUser {
  kor_ime: string;
  tip: string;
}

export interface UserName {
  kor_ime: string;
}

export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  fill: ApexFill
}

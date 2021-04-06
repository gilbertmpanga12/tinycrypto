import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LinkUrls } from 'src/app/models/models';
import { DialogviewComponent } from '../dialogview/dialogview.component';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MainService } from 'src/app/services/main.service';
import * as moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deviceMatches!: boolean;
  currentPrice: string = "";
  currencyCode: string = "$";
  features: LinkUrls[] = [
    {
      name: 'Your Portfolio',
      icon: '',
      url: '',
      currency: '$'
    },
    {
      name: 'Bitcoin',
      icon: '',
      url: '',
      currency: ''
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.deviceMatches  = result.matches;
        return this.deviceMatches;
      }),
      shareReplay()
    );

    public lineChartData: ChartDataSets[] = [];
    public lineChartLabels: Label[] = [];
    public lineChartOptions= {
      responsive: false,
      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
      
    };
    public lineChartColors: Color[] = [
      {
        borderColor: '#34D399',
        backgroundColor: '#34D399',
      },
    ];
    public lineChartLegend = true;
    public lineChartType:ChartType = 'line';
    public lineChartPlugins = [];

  constructor(
    public dialog: MatDialog, 
    private breakpointObserver: BreakpointObserver, private service: MainService) { }

  ngOnInit(): void {
    this.service.bitcoinPrice().subscribe((data: any) => {
      const btc_data = data.Data.Data;
      const times = btc_data.map((obj: any) => `${moment(obj.time).format('MMM Do')}`);
      const price = btc_data.map((obj: any) => obj.high);
      this.lineChartLabels = times;
      this.currentPrice = this.currencyCode + price[price.length-1].toFixed(2);
      this.lineChartData = [ { data: price, label: this.currencyCode,
        borderColor: 'rgba(118,106,192,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2}];
    });
  }


  openDialog(trade: boolean): void {
    const dialogRef = this.dialog.open(DialogviewComponent, {
      width: '400px',
      data: {trade:trade}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

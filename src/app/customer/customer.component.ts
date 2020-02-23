import { Component, OnInit, HostListener, InjectionToken, Injectable, Inject } from '@angular/core';
import { SellrecComponent } from '../sellrec/sellrec.component';
import { HistoryComponent } from './history/history.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ConsumptionComponent } from 'src/app/customer/consumption/consumption.component';
import { TermsComponent } from 'src/app/customer/terms/terms.component';
import { CreditsComponent } from 'src/app/customer/credits/credits.component';
import { SettingsComponent } from 'src/app/customer/settings/settings.component';
import { ThemarketComponent } from 'src/app/customer/themarket/themarket.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  public should_open_sellrec = false;
  public should_open_history = false;
  public should_open_settings = false;
  public should_open_market = false;

  @Inject(MAT_DIALOG_DATA) private data: any;


  constructor( private _bottomSheet: MatBottomSheet, public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialog = this.dialog.open( ConsumptionComponent, {
      width: '90%', maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  history() {
    console.log("Open Bill History");
    this.should_open_market = false;
    this.should_open_history = true;
    this.should_open_sellrec = false;
  }

  sellrec() {
    this.should_open_market = false;
    this.should_open_sellrec = true;
    this.should_open_history = false;
    console.log("Open up exchange");
  }

  openSettings() {
    this.should_open_market = false;
    this.should_open_settings = true;
    this.should_open_history = false;
    this.should_open_sellrec = false;
    console.log("Open up Settings");
  }


  opentheMarket() {
    this.should_open_settings = false;
    this.should_open_history = false;
    this.should_open_sellrec = false;
    this.should_open_market = true;
    console.log("Open up Settings");
  }

  onCreate(): void {
    console.log("Open Account Profile");
    const dialog = this.dialog.open( TermsComponent, {
      width: '90%', maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openCredits(): void {
    console.log("Open Credits Portal");
    const dialog = this.dialog.open( CreditsComponent, {
      width: '90%', maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(CusBottomSheet);
  }


  openBottomWarning(): void {
    this._bottomSheet.open(CusBottomWarn);
  }

  lineChartData: ChartDataSets[] = [
    { data: [99, 95.2, 91.0, 76.3, 70.1, 63], label: 'Prepayment Credits' },
  ];

  lineChartLabels: Label[] = ['1st', '3rd', '5th', '7th', '9th', '11th'];

  lineChartOptions = {
    responsive: true,
    scales: { //you're missing this
    yAxes: [{
       scaleLabel: {
          display: true,
          labelString: 'Credits Left [Dollar Denominated]'
       }
    }],
    xAxes: [{
      scaleLabel: {
         display: true,
         labelString: 'Day of the Month [December]'
      }
   }]
 }//END scales
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#FBD22D',
      backgroundColor: '#6D92CB',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'sheet.html',
  styleUrls: ['./customer.component.scss']
})
export class CusBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CusBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
}


@Component({
  selector: 'bottom-sheet-warn',
  templateUrl: 'warning.html',
  styleUrls: ['./customer.component.scss']
})
export class CusBottomWarn {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CusBottomWarn>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
}
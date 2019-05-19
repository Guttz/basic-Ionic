import { Component,  } from '@angular/core';
import { Platform } from '@ionic/angular';
import { EstimoteBeacons, EstimoteBeaconRegion } from '@ionic-native/estimote-beacons/ngx';

let cordova: any;
let evothings: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private platform: Platform, private eb: EstimoteBeacons) {
  }



  startScanningForBeacons() {
  // Request permission to use location on iOS

  var region: EstimoteBeaconRegion = {uuid: '636f3f8f-6491-4bee-95f7-d8cc64a863b5', major: 0, minor: 0};

  this.eb.startRangingBeaconsInRegion(region).subscribe( (data) => {
    console.log( JSON.stringify(data));
  });

/*   // Start ranging
this.eb.startMonitoringForRegion(region, true)
.sub(
  () => console.log('received the request to monitoring'),
  error => console.error('failed to begin monitoring: ', error)
);
// Stop ranging
this.eb.stopMonitoringForRegion() */

}


  startScanningForBeacons2() {
    this.platform.ready().then( () => {
      evothings.eddystone.startScan( (beaconData) => {
        console.log(beaconData);
      }, error => { console.log(error)});
    });
  }

}

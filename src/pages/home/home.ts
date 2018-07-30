import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular';
var lat=0;
var long=0;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aqi:any;
  constructor(public loader: LoadingController, public navCtrl: NavController, public http: Http, ) {
    this.http = http;
    this.loader = loader;
    this.aqi = { data: {} };
    this.reload();
  }
  reload() {
    let loading = this.loader.create({
      spinner: 'dots',
      content: 'Loading',
      duration: 60000
    });
    this.http.get('https://api.waqi.info/feed/geo:'+lat+';'+long+'/?token=d375d7b3c23d764d9e8b5a40129fa855770aeab4')
      .toPromise()
      .then(response => {
        this.aqi = response.json();
        loading.dismiss();

      })
      .catch(error => {
        loading.dismiss();
        console.log(error.json())
        let eloading = this.loader.create({
          content: 'Connectivity Issue!',
          duration: 5000
        });
        eloading.present();
      });
  }
  aqiStatus(val) {

    if (val <= 50) {
      return { code: 'good', val: 'Good' };
    } else if (val <= 100) {
      return { code: 'mod', val: 'Moderate' };
    } else if (val <= 200) {
      return { code: 'unhealthy', val: 'Unhealthy' };
    } if (val <= 300) {
      return { code: 'vunhealthy', val: 'Very Unhealthy' };
    } else if (val > 300) {
      return { code: 'hazardous', val: 'Hazardous' };
    } else {
      return { code: '', val: '' }
    }
  }
  location(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        
        lat=position.coords.latitude;
        long=position.coords.longitude;
     });
      this.reload();
      console.log(lat);
    }
  }
  
}
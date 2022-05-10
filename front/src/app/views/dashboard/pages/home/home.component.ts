import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { WeatherService } from '../../utils/services/weather.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  location = { cityName: 'London', countryCode: 'uk' };
  weather = undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    console.log("ENTR");
    
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  public user: FormGroup;

  // ngOnInit(): void {
  //   this.user = new FormGroup({
  //     nombre: new FormControl(''),
  //     cedula: new FormControl(''),
  //     telefono: new FormControl(''),
  //     fech_naci: new FormControl(''),
  //     genero: new FormControl(''),
  //     cliente: new FormControl(''),
  //     sede: new FormControl(''),
  //     edad: new FormControl(''),
  //   });
  // }

  public registrar(){
    console.log(this.user);
    
  }
  public listar(){
  }
  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }
}

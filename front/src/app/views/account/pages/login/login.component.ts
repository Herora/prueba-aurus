import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: string = ('comunicaciones');
  public clave: string = ('Reg1234');
  constructor( private router: Router, private servicios: HttpService) { }

  ngOnInit(): void {
  }

  login(){
    this.servicios.login(this.usuario, this.clave).subscribe((res: any) => {
      const data = JSON.parse(res);
      if (data[0].estado == 'activo'){
        alert('bienvenido');
        this.router.navigate(['/dashboard/home']);
      }else{
        alert('Comuniquese con su administrador');
      }
      }
    );
    this.router.navigate(['/dashboard/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  name:any;
  password:any;
  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    let data={
      name:this.name,
      password:this.password
    }

    this.service.login(data).subscribe((res:any)=>{
      console.log("INICIO DE SESION EXITOSO",res);
      this.router.navigate(["/alumnos/create"]);
    },
    (error:any)=>{
      console.log("Error===",error)
    }
  )
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/servicios/alumno.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  id:any;

  nombres:any;
  apellidos:any;
  direccion:any;
  zona:any;
  sexo:any;
  edad:any;


  constructor(
    private service:AlumnoService,
     private router:Router,
     private route:ActivatedRoute

    ) {

      this.route.params.subscribe((param:any)=>{
        this.id=param.id;
        this.service.find(this.id);
        console.log(this.id);

      })
     }

  ngOnInit() {
  }

  getAlumno(id:any){
    this.service.find(id).subscribe((res:any)=>{
      console.log("suceess",res)
      let alumno=res[0]
      this.id=alumno.id;
      this.nombres=alumno.titulo;
      this.apellidos=alumno.apellidos;
      this.direccion=alumno.direccion;
      this.zona=alumno.zona;
      this.sexo=alumno.sexo;
    },(error)=>{
      console.log("error",error)
    })
  }

  actualizar(){
    let data = {
      nombres: this.nombres,
      apellidos:this.apellidos,
      direccion: this.direccion,
      zona: this.zona,
      sexo: this.sexo,
      edad: this.edad
    }

    this.service.update(data,this.id).subscribe((res:any)=>{
      console.log("UPDATE======",res)
      this.router.navigate(['/alumnos/create']);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumno.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  nombres:any;
  apellidos:any;
  direccion:any;
  zona:any;
  sexo:any;
  edad:any;

  alumnos:any=[];

  constructor(private service: AlumnoService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(
      (data) => {
        console.log("SUCESSS====", data)
        this.alumnos = data
      }
      , (error) => {
        console.log("Error====", error)
      });
  }

  registrar() {
    let data = {
      nombres: this.nombres,
      apellidos:this.apellidos,
      direccion: this.direccion,
      zona: this.zona,
      sexo: this.sexo,
      edad: this.edad
    }

    this.service.create(data).subscribe((res: any) => {
      console.log("Success====", data);
      this.nombres="";
      this.apellidos=""
       this.direccion="";
      this.zona="";
      this.sexo="";
      this.edad="";
      this.getAll();
    }, (error: any) => {
      console.log("Error====", error)
    })
  }

  borrar(id: number) {
    this.service.delete(id).subscribe((res: any) => {
      console.log("BORRADO======", res);
      this.getAll();
    }, (error) => {
      console.log("ERROR======", error);
    }
    )
  }
}

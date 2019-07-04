import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  loading: boolean = false;
  cursos: any[] = [];

  constructor(
    private curso: CursoService
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.loading = true;
    this.curso.listar().subscribe((res) => {
      this.cursos = res.data;
      this.loading = false;
    });
  }

}

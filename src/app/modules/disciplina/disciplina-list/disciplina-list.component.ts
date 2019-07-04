import { DisciplinaService } from './../disciplina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.scss']
})
export class DisciplinaListComponent implements OnInit {

  loading: boolean = false;
  disciplinas: any[] = [];

  constructor(
    private disciplina: DisciplinaService
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.loading = true;
    this.disciplina.listar().subscribe((res) => {
      console.log(res);
      this.disciplinas = res.data;
      this.loading = false;
    });
  }


}

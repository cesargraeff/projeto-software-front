import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  loading: boolean = false;
  alunos: any[] = [];

  constructor(
    private aluno: AlunoService
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.loading = true;
    this.aluno.listar().subscribe((res) => {
      this.alunos = res.data;
      this.loading = false;
    });
  }

}

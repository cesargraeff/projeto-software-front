import { MatriculaService } from './../matricula.service';
import { AlunoService } from './../../aluno/aluno.service';
import { CurriculoService } from './../curriculo.service';
import { Component, OnInit } from '@angular/core';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  loading: boolean = false;
  grade: any[] = [];
  matricula: any = {};
  aluno: number = null;
  alunos: any[] = [];
  modal: boolean = false;

  constructor(
    private curriculo: CurriculoService,
    private alunoService: AlunoService,
    private matriculaService: MatriculaService
  ) { }

  ngOnInit() {
    this.loadAlunos();
  }

  load(){
    this.loading = true;
    this.grade = [];
    this.curriculo.visualizar(this.aluno).subscribe((res) => {

      res.data.forEach((element: any) => {
        if(!this.grade[element.semestre - 1]){
          this.grade[element.semestre - 1] = [];
        }
        this.grade[element.semestre - 1].push(element);
      });

      this.loading = false;
    });
  }


  loadAlunos(){
    this.alunoService.listar().subscribe((res: any) => {
      this.alunos = res.data;
    });
  }

  add(disciplina: any){
    this.matricula = {
      nome: disciplina.nome,
      aluno_id: this.aluno,
      disciplina_id: disciplina.id
    };
    this.modal = true;
  }

  edit(disciplina: any){
    this.matricula = {
      id: disciplina.matricula,
      nome: disciplina.nome,
      aluno_id: this.aluno,
      disciplina_id: disciplina.id,
      semestre: disciplina.semestre_cursado,
      nota: disciplina.nota
    };
    this.modal = true;
  }

  save(){
    if(this.matricula.id){
      this.matriculaService.editar(this.matricula.id,this.matricula).subscribe((res: any) => {
        this.load();
        this.modal = false;
      });
    }else{
      this.matriculaService.adicionar(this.matricula).subscribe((res: any) => {
        this.load();
        this.modal = false;
      }, (err) => {
        alert('Requisitos não atendidos para a disciplina!');
        this.modal = false;
      });
    }
  }


  close(){
    this.modal = false;
  }

}

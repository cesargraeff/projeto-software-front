import { CurriculoService } from './../curriculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss']
})
export class CurriculoListComponent implements OnInit {

  loading: boolean = false;
  curriculos: any[] = [];

  constructor(
    private curriculo: CurriculoService
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.loading = true;
    this.curriculo.listar().subscribe((res) => {
      this.curriculos = res.data;
      this.loading = false;
    });
  }

}

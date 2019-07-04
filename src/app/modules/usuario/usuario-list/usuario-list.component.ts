import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  loading: boolean = false;
  usuarios: any[] = [];

  constructor(
    private usuario: UsuarioService
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.loading = true;
    this.usuario.listar().subscribe((res) => {
      this.usuarios = res.data;
      this.loading = false;
    });
  }

}

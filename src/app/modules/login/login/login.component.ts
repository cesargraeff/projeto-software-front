import { AutheticationService } from './../../../core/services/authetication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private authenticationService: AutheticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.login = this.formBuilder.group({
      'email' : ['', [Validators.required]],
      'senha' : ['', [Validators.required]],
      'lembrar' : [false]
    });

    this.authenticationService.logout();

  }

  get f() { 
    return this.login.controls; 
  }

  onSubmit() {

    this.submitted = true;

    if(this.login.invalid){
      this.toastr.warning(null,'VERIFIQUE OS CAMPOS');
      return;
    }

    this.loading = true;

    this.authenticationService.login(this.f.email.value,this.f.senha.value,this.f.lembrar.value).subscribe(res => {
      this.router.navigate(['/']);
    }, err => {
      this.loading = false;
      this.toastr.warning(err);
    });

  }

}

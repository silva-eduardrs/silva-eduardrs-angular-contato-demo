import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /*
  loginFormModel: { nome: string; senha: string; confirmaSenha: string; } = {
    nome: '',
    senha: '',
    confirmaSenha: '',
  };
  */
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    //this.resetFormTemplate();
    this.criarForm();
  }

  /*
  resetFormTemplate() {
    this.loginFormModel = {
      nome: '',
      senha: '',
      confirmaSenha: '',
    }
  }
  */
  criarForm() {
    this.loginForm = new FormGroup({
      nome: new FormControl(''),
      senha: new FormControl(''),
      confirmaSenha: new FormControl(''),
    });
  }

  /*
  onSumit() {
    if (this.loginFormModel.senha !== this.loginFormModel.confirmaSenha) {
      window.alert('erro');
    } else {
      window.alert('ok');
    }
  }
  */
  entrar() {
    if (this.loginForm.value.senha !== this.loginForm.value.confirmaSenha) {
      window.alert('erro');
    } else {
      window.alert('ok');
    }
  }
}

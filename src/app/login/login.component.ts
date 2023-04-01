import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Model para utilização no Template Driven Forms
  loginFormModel: { nome: string; senha: string; confirmaSenha: string } = {
    nome: '',
    senha: '',
    confirmaSenha: '',
  };
  // Declação do FormGroup para utilização no Reactive Forms
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.resetFormTemplate();
    this.criarForm();
  }

  // Função para reset na model do Template Driven Forms
  resetFormTemplate() {
    this.loginFormModel = {
      nome: '',
      senha: '',
      confirmaSenha: '',
    };
  }

  // Função para inicialização do form no Reactive Forms
  criarForm() {
    this.loginForm = new FormGroup({
      nome: new FormControl(''),
      senha: new FormControl(''),
      confirmaSenha: new FormControl(''),
    });
  }

  // Função chamada no onSubmit do Template Driven Forms
  onSubmit() {
    console.log('Template Driven Forms');
    if (this.loginFormModel.senha !== this.loginFormModel.confirmaSenha) {
      window.alert('erro');
    } else {
      window.alert('ok');
    }
  }

  // Declação do FormGroup para utilização no Reactive Forms
  entrar() {
    console.log('Reactive Forms');
    if (this.loginForm.value.senha !== this.loginForm.value.confirmaSenha) {
      window.alert('erro');
    } else {
      window.alert('ok');
    }
  }
}

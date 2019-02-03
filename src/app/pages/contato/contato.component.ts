import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  passwordError: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(login){
    console.log(login);
  }
  checkPassword(senha){
    if(senha.value.length<=6)
      this.passwordError = true;
    else
      this.passwordError = false;
  }
}

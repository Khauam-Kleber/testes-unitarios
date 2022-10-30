import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){
    this.form = this.formBuilder.group({
      nome:  ['', Validators.required ],
      telefone: ['', Validators.required ],
    });
  }

  get formControls() { return this.form.controls; }

  exibirForm(){
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value)
  }

}

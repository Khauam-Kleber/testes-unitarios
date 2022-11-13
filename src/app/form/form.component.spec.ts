import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports:[FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar se a quantidade de input esta correta', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  })

  it('verificar se os valores iniciais estão corretos', () => {
    const loginFormGroup = component.form;
    const loginFormValues = { nome: '', telefone: ''} 
    expect(loginFormGroup.value).toEqual(loginFormValues)
  })

  it('verificar se o campo nome possui valor correto, não possui erros e é requirido', () => {
    const loginFormNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    const userNameValueFromGroup = component.form.get('nome');
    expect(loginFormNameElement.value).toEqual(userNameValueFromGroup.value);
    expect(userNameValueFromGroup.errors).not.toBeNull();
    expect(userNameValueFromGroup.errors.required).toBeTruthy();
  })

  it('Verificar valor do nome apos colocar algum valor e validação', ( ) => {
    //buscando o input do form
    const loginFormNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    //atribuindo valor ao input
    loginFormNameElement.value = "joao da silva"; //se tirar esse valor vai estourar erro pois o valor é requirido 
    //disparando evento de mudança de valor
    loginFormNameElement.dispatchEvent(new Event('input'));
    //detectando as mudanças
    fixture.detectChanges();

    //apos disparar eventos comparar valores
    fixture.whenStable().then(() => {
      const userNameValueFromGroup = component.form.get('nome');
      expect(loginFormNameElement.value).toEqual(userNameValueFromGroup.value);
      expect(userNameValueFromGroup.errors).toBeNull();
    })
  });

  it('verificar se o form é valido e esta completamente preenchido', () => {
    const loginFormNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    const loginFormTelElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[1];
    loginFormNameElement.value = "joao da silva";
    loginFormTelElement.value = "111101211";
    loginFormNameElement.dispatchEvent(new Event('input'));
    loginFormTelElement.dispatchEvent(new Event('input'));
    const isLoginFormValid = component.form.valid;
    fixture.whenStable().then(() => {
      expect(isLoginFormValid).toBeTruthy();
    })
  })
  


});

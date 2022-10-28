import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// describe('Suite description', () => {
//   beforeAll(() => {
//     console.log('Called before all specs are run');
//   });
//   afterAll(() => {
//     console.log('Called after all specs are run');
//   });

//   beforeEach(() => {
//     console.log('Called before each spec is run');
//   });
//   afterEach(() => {
//     console.log('Called after each spec is run');
//   });

//   it('Spec 1', () => {
//     console.log('Spec 1');
//   });
//   it('Spec 2', () => {
//     console.log('Spec 2');
//   });
// });

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should sum two numbers', () => {
    //busca a referencia do componente
    const fixture = TestBed.createComponent(AppComponent);
    //captura a instancia 
    const app = fixture.componentInstance;

    //cria um valor esperado
    const expectedValue = 5;

    //faz a chamada da função com 2 valores testes
    const actualValue = app.add(2, 3);

    //ocorre o teste esperando que o valor da função seja o correto para o funcionamento do sistema
    expect(actualValue).toBe(expectedValue);

  });

  it(`should have as title 'testes-unitarios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testes-unitarios');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testes-unitarios app is running!');
  });
});

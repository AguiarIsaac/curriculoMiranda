import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { componentsModule } from './components/components';
import { TabsModule } from 'primeng/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    componentsModule,
    TabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' } // Define pt-BR como padrão globalmente
  ],
})
export class AppComponent implements OnInit{
  form!: FormGroup;
  tabAtualMain: number = 0;

  constructor(private PrimeNGConfig: PrimeNG, private fb: FormBuilder) {
    this.PrimeNGConfig.setTranslation({
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      dateFormat: "dd/mm/yy",
    })
  }

  ngOnInit() {
    this.inicializarForms()
  }

  inicializarForms () {
    this.form = this.fb.group({
      dadosPessoais: this.fb.group({
        nomeVal: ['', Validators.required],
        dataVal: ['', Validators.required],
        ecVal: ['', Validators.required],
        sxVal: ['F', Validators.required],
        rgVal: ['', [Validators.required, Validators.pattern('\\d{2}\\.\\d{3}\\.\\d{3}-\\d')]],
        cpfVal: ['', [Validators.required, Validators.pattern('\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}')]],
        pCnhVal: ['S', Validators.required],
        catCnhVal: [{value: [], disabled: false}, Validators.required]
      }),

      endereco: this.fb.group({
        endVal: ['', Validators.required],
        bairroVal: ['', Validators.required],
        numVal: [undefined, Validators.required],
        compVal: [undefined],
        estadoVal: ['', Validators.required],
        cidVal: ['', Validators.required],
        cepVal: ['', [Validators.required, Validators.pattern('\\d{5}\\-\\d{3}')]],
      }),

      contato: this.fb.group({
        telResVal: [''],
        celVal: ['', Validators.required],
        emailVal: ['', [Validators.required, Validators.email]],
        lkdInVal: [''],
        facebookVal: [''],
        instagramVal: ['']
      }),

      areaInteresse: this.fb.group({
        nvlHrVal: ['', Validators.required],
        areaAtVal: ['', Validators.required],
        cargoVal: ['', Validators.required]
      }),

      infosAdicionais: this.fb.group({
        ptSalVal: [''],
        dpViagemVal: [''],
        dpMudarVal: [''],
        pIndicacaoVal: [''],
        pDeficienciaVal: [''],
        consideracoesVal: ['']
      }),

      formacao: this.fb.group({
        formacoesVal: [[]],
      }),

      experienciaProfissional: this.fb.group({
        experienciaProVal: [[]]
      })

    })
  }

  get dadosPessoaisForm(): FormGroup {
    return this.form.get('dadosPessoais') as FormGroup;
  }

  get enderecoForm(): FormGroup {
    return this.form.get('endereco') as FormGroup;
  }

  get contatoForm(): FormGroup {
    return this.form.get('contato') as FormGroup;
  }

  get areaInteresseForm(): FormGroup {
    return this.form.get('areaInteresse') as FormGroup;
  }

  get infosAdicionaisForm(): FormGroup {
    return this.form.get('infosAdicionais') as FormGroup;
  }

  get formacaoForm(): FormGroup {
    return this.form.get('formacao') as FormGroup;
  }

  get experienciaProfissionalForm(): FormGroup {
    return this.form.get('experienciaProfissional') as FormGroup;
  }

  receberForm(form: FormGroup) {
    this.form = form;
    console.log("Formulário Recebido! ", form.value)
  }

  setTab(index: any) {
    this.tabAtualMain = index;
  }

  ativarTab(index: any) {
    // if (this.tabAtualMain >= index) {
    //   return true
    // } else {
    //   return false
    // }
    return true
  }


  }

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { componentsModule } from './components/components';
import { TabsModule } from 'primeng/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    componentsModule,
    TabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  form!: FormGroup;
  tabAtualMain: number = 0;

  constructor(private fb: FormBuilder) {}

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
        nomeEmpVal: [''],
        tipEmpVal: [''],
        endEmpVal: [''],
        numEmpVal: [''],
        emailEmpVal: ['', Validators.email],
        telEmpVal: [''],
        dtAdmVal: [''],
        dtDmsVal: [''],
        utlCargoVal: [''],
        utlSalVal: [''],
        resAtvVal: ['']
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

  setTab(index: any) {
    this.tabAtualMain = index;
  }


  }

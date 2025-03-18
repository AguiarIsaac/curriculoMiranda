import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MessageModule } from 'primeng/message';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

interface EstadoCivil {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule,

    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    MessageModule,
    DatePickerModule,
    SelectModule,
    RadioButtonModule,
    InputMaskModule,
    MultiSelectModule,
    TabsModule,
    ButtonModule,
    InputNumberModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  formDadosPessoais: FormGroup;
  formEndereco: FormGroup;
  formContato: FormGroup;

  constructor (private fb: FormBuilder) {
    this.formDadosPessoais = this.fb.group({
      nomeVal: ['', Validators.required],
      dataVal: ['', Validators.required],
      ecVal: ['', Validators.required],
      sxVal: ['F', Validators.required],
      rgVal: ['', [Validators.required, Validators.pattern('\\d{2}\\.\\d{3}\\.\\d{3}-\\d')]],
      cpfVal: ['', [Validators.required, Validators.pattern('\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}')]],
      pCnhVal: ['S', Validators.required],
      catCnhVal: [{value: [], disabled: false}, Validators.required]
    })

    this.formEndereco = this.fb.group({
      endVal: ['', Validators.required],
      bairroVal: ['', Validators.required],
      numVal: [undefined, Validators.required],
      compVal: [undefined],
      estadoVal: ['', Validators.required],
      cidVal: ['', Validators.required],
      cepVal: ['', [Validators.required, Validators.pattern('\\d{5}\\-\\d{3}')]],
    })

    this.formContato = this.fb.group({
      telResVal: [''],
      celVal: ['', Validators.required],
      emailVal: ['', [Validators.required, Validators.email]],
      lkdInVal: [''],
      facebookVal: [''],
      instagramVal: ['']
    })
  }

  get dPCntrl() {
    return this.formDadosPessoais.controls;
  }

  get endCntrl() {
    return this.formEndereco.controls;
  }

  get contCntrl() {
    return this.formContato.controls;
  }

  enviarFormulario() {
    if (this.formDadosPessoais.valid && this.tabAtual === 0) {
      this.proximaTab()
      console.log('Formulário enviado com sucesso!', this.formDadosPessoais.value);
    } else if (this.formEndereco.valid && this.tabAtual === 1) {
      this.proximaTab()
      console.log('Formulário enviado com sucesso!', this.formEndereco.value);
    } else if (this.formContato.valid && this.tabAtual === 2) {
      console.log('Formulário enviado com sucesso!', this.formContato.value);
    } else {
      console.log('Preencha todos os campos corretamente.');
    }
  }

  //Botão passar tab
  tabAtual: number = 0;

  setTab(index: any) {
    this.tabAtual = index;
  }

  proximaTab() {
    if (this.tabAtual >= 0 && this.tabAtual <= 1) {
      this.tabAtual++;
    }
  }

  voltarTab() {
    if (this.tabAtual >= 1 && this.tabAtual <= 2) {
      this.tabAtual--
    }
  }

  ativarBotao () {
    if (this.tabAtual === 0 && this.formDadosPessoais.valid) {
      return true
    } else if (this.tabAtual === 1 && this.formEndereco.valid) {
      return true
    } else if (this.tabAtual === 2 && this.formContato.valid) {
      return true
    } else {
      return false
    }
  }

  // Lista para o select de estado civil
  estCiv: EstadoCivil[] = [
    {value: 'S', viewValue: 'Solteiro(a)'},
    {value: 'C', viewValue: 'Casado(a)'},
    {value: 'V', viewValue: 'Viúvo(a)'},
    {value: 'O', viewValue: 'Outro'}
  ]

  // Listas opções radio buttons
  opSx = [
    { viewValue: 'Feminino', value: 'F', id: 'sx1', divId: 'div-pad' },
    { viewValue: 'Masculino', value: 'M', id: 'sx2' }
  ]

  opCnh = [
    { viewValue: 'Sim', value: 'S', id: 'pcnh1', divId: 'div-pad' },
    { viewValue: 'Não', value: 'N', id: 'pcnh2' }
  ];

  // Campos CNH
  desativarCnh = true;

  alterarCatCnh(){
    if(this.dPCntrl['pCnhVal'].value === 'S'){
      this.desativarCnh = false
      this.dPCntrl['catCnhVal'].enable()
    } else {
      this.desativarCnh = true
      this.dPCntrl['catCnhVal'].disable()
      this.dPCntrl['catCnhVal'].setValue(undefined)
    }
  }

  categoriasCnh: string[] = ['A', 'B', 'C', 'D', 'E']

  // Lista para o select de Estado
  estado: string[] = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
  ]
  
}

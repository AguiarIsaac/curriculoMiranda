import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {DefaultValueAccessor, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { MessageModule } from 'primeng/message';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { Tab, TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

interface EstadoCivil {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    FormsModule, 
    MatExpansionModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,

    InputTextModule,
    InputGroupModule,
    MessageModule,
    DatePickerModule,
    SelectModule,
    RadioButtonModule,
    InputMaskModule,
    MultiSelectModule,
    TabsModule,
    ButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  formDadosPessoais: FormGroup;

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
  }

  get dPCntrl() {
    return this.formDadosPessoais.controls;
  }

  get formDadosPessoaisValido(): boolean {
    return this.formDadosPessoais.valid;
  }

  enviarFormulario() {
    if (this.formDadosPessoais.valid) {
      this.proximaTab()
      console.log('Formulário enviado com sucesso!', this.formDadosPessoais.value);
    } else {
      console.log('Preencha todos os campos corretamente.');
    }
  }

  // Listas opções radio buttons
  opSx = [
    { viewValue: 'Feminino', value: 'F', id: 'sx1', divId: 'div-pad' },
    { viewValue: 'Masculino', value: 'M', id: 'sx2' }
  ]

  opCnh = [
    { viewValue: 'Sim', value: 'S', id: 'pcnh1', divId: 'div-pad' },
    { viewValue: 'Não', value: 'N', id: 'pcnh2' }
  ];

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

  // Lista para o select de estado civil
  estCiv: EstadoCivil[] = [
    {value: 'S', viewValue: 'Solteiro(a)'},
    {value: 'C', viewValue: 'Casado(a)'},
    {value: 'V', viewValue: 'Viúvo(a)'},
    {value: 'O', viewValue: 'Outro'}
  ]

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



  // Tratamento campo RG
  // formatRg(event: any) {
  //   let value = event.target.value.replace(/\D/g, '');

  //   if (value.length > 9) value = value.substring(0, 9);
    
  //   if (value.length >= 5) value = value.replace(/(\d{2})(\d{3})/, '$1.$2');
  //   if (value.length >= 8) value = value.replace(/(\d{2})\.(\d{3})(\d{3})/, '$1.$2.$3');
  //   if (value.length === 11) value = value.replace(/(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

  //   event.target.value = value;
  // }

  // Tratamento campo CPF
  // formatCpf(event: any) {
  //   let value = event.target.value.replace(/\D/g, '');

  //   if (value.length > 11) value = value.substring(0, 11);
    
  //   if (value.length >= 6) value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
  //   if (value.length >= 9) value = value.replace(/(\d{3})\.(\d{3})(\d{3})/, '$1.$2.$3');
  //   if (value.length === 13) value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

  //   event.target.value = value;
  // }
}

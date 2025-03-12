import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {DefaultValueAccessor, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
import { TabsModule } from 'primeng/tabs';
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

  // Validação de campo obrigatório
  nomeVal = new FormControl('', [Validators.required]);
  dataVal = new FormControl('', [Validators.required]); 
  ecVal = new FormControl(Date, [Validators.required]);
  rgVal = new FormControl('', [Validators.required, Validators.pattern('\\d{2}\\.\\d{3}\\.\\d{3}-\\d')]);
  cpfVal = new FormControl('', [Validators.required, Validators.pattern('\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}')]);
  catCnhVal = new FormControl('', [Validators.required]);

  gender!: string;
  pcnh!: string;

  opCnh = [
    { viewValue: 'Sim', value: 'S', id: 'pcnh1' },
    { viewValue: 'Não', value: 'N', id: 'pcnh2'}
  ];

  //Botão passar tab
  tabAtual: number = 0;

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

  // Campos CNH
  desativarCnh = true;

  alterarCatCnh(){
    if(this.pcnh === 'S'){
      this.desativarCnh = false
      this.catCnhVal.enable()
    } else {
      this.desativarCnh = true
      this.catCnhVal.disable()
      this.valueCatCnh = []
    }
  }

  valueCatCnh: string[] | undefined;
  categoriasCnh: string[] = ['A', 'B', 'C', 'D', 'E']
}

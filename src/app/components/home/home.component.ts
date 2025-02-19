import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';

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
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // private enviaFormService = inject(EnviaFormService);

  // nome = "Matheus";
  // idButton = "ttst"
  // deveMostrarTitulo = true;

  // listaTeste = ["Teste", "Show", "aaaaa"]

  // @Input("nome") minhaPropsDeFora!: string;

  // @Output() emitindoValorNome = new EventEmitter<string>();

  // boolTeste = false;

  // atualizaBooleano(valor: boolean){
  //   this.boolTeste = valor;
  // }

  // trocarTitulo(event: any){
  //   if(this.deveMostrarTitulo){
  //     this.deveMostrarTitulo = false
  //   } else {
  //     this.deveMostrarTitulo = true
  //   }

  //   this.emitindoValorNome.emit(this.nome);
  //   this.enviaFormService.teste(event);
  // }

  //Botão passar form (não implementado)
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

  // Lista para o select de estado civil
  estCiv: EstadoCivil[] = [
    {value: 'S', viewValue: 'Solteiro(a)'},
    {value: 'C', viewValue: 'Casado(a)'},
    {value: 'V', viewValue: 'Viúvo(a)'},
    {value: 'O', viewValue: 'Outros'}
  ]

  // Validação de campo obrigatório
  // inputRequired = new FormControl('', [Validators.required]);
  nomeVal = new FormControl('', [Validators.required]);
  dataVal = new FormControl('', [Validators.required]); 
  ecVal = new FormControl('', [Validators.required]);

  rgVal = new FormControl('', [Validators.required, Validators.minLength(12)]);

  cpfVal = new FormControl('', [Validators.required]);
  catCnhVal = new FormControl('', [Validators.required]);

  // Tratamento campo RG
  formatRg(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.substring(0, 10);
    
    if (value.length >= 3) value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
    if (value.length >= 6) value = value.replace(/(\d{3})\.(\d{3})(\d{3})/, '$1.$2.$3');
    if (value.length === 12) value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  
    event.target.value = value;
  }

  getRgErrorMessage() {
    let mensagem = ''
    if (this.rgVal.hasError('required')) {
      return mensagem = 'Preencha o campo antes de continuar!';
    // } else if (this.rgVal.hasError('minlength')) {
    //   return mensagem = 'Formato inválido. Use: 99.999.999-9';
    } else {
      return mensagem
    }
  }

  rgError = this.getRgErrorMessage()
}

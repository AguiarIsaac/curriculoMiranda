import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {DefaultValueAccessor, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

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
    MatTabsModule
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

  //Botão passar form
  tabSelecionada = new FormControl(0);

  proximaTab() {
    let valTab = this.tabSelecionada.value;
    if (valTab != null) {
      this.tabSelecionada.setValue(valTab+1);
    }
  }

  voltarTab() {
    let valTab = this.tabSelecionada.value;
    if (valTab != null) {
      this.tabSelecionada.setValue(valTab-1);
    }
  }

  // Lista para o select de estado civil
  estCiv: EstadoCivil[] = [
    {value: 'S', viewValue: 'Solteiro(a)'},
    {value: 'C', viewValue: 'Casado(a)'},
    {value: 'V', viewValue: 'Viúvo(a)'},
    {value: 'O', viewValue: 'Outro'}
  ]

  // Validação de campo obrigatório
  nomeVal = new FormControl('', [Validators.required]);
  dataVal = new FormControl('', [Validators.required]); 
  ecVal = new FormControl('', [Validators.required]);
  rgVal = new FormControl('', [Validators.required, Validators.minLength(12)]);
  cpfVal = new FormControl('', [Validators.required, Validators.minLength(14)]);
  catCnhVal = new FormControl('', [Validators.required]);

  // Tratamento campo RG
  formatRg(event: any) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 9) value = value.substring(0, 9);
    
    if (value.length >= 5) value = value.replace(/(\d{2})(\d{3})/, '$1.$2');
    if (value.length >= 8) value = value.replace(/(\d{2})\.(\d{3})(\d{3})/, '$1.$2.$3');
    if (value.length === 11) value = value.replace(/(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    event.target.value = value;
  }

  // getRgErrorMessage() {
  //   let mensagem: string;
  //   if (this.rgVal.hasError('required')) {
  //     mensagem = 'Preencha o campo antes de continuar!';
  //     return mensagem;
  //   } else if (this.rgVal.hasError('minlength')) {
  //     mensagem = 'Formato inválido. Use: 99.999.999-9';
  //     return mensagem;
  //   } else {
  //     return mensagem = ""
  //   }
  // }

  // rgError = this.getRgErrorMessage()

  // Tratamento campo CPF
  formatCpf(event: any) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length >= 6) value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
    if (value.length >= 9) value = value.replace(/(\d{3})\.(\d{3})(\d{3})/, '$1.$2.$3');
    if (value.length === 13) value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    event.target.value = value;
  }

  // getCpfErrorMessage() {
  //   let mensagem = ''
  //   if (this.rgVal.hasError('required')) {
  //     return mensagem = 'Preencha o campo antes de continuar!';
  //   } else if (this.rgVal.hasError('minlength')) {
  //     return mensagem = 'Formato inválido. Use: 999.999.999-99';
  //   } else {
  //     return mensagem
  //   }
  // }

  // cpfError = this.getCpfErrorMessage()

  // Campos CNH
  desativarCnh = false;

  trocarTitulo(){
    if(this.desativarCnh){
      this.desativarCnh = false
    } else {
      this.desativarCnh = true
    }
  }

  categoriasCnh: string[] = ['A', 'B', 'C', 'D', 'E']
}

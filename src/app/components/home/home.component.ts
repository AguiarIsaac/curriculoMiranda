import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormService = inject(EnviaFormService);

  nome = "Matheus";
  idButton = "ttst"
  deveMostrarTitulo = true;

  listaTeste = ["Teste", "Show", "aaaaa"]

  @Input("nome") minhaPropsDeFora!: string;

  @Output() emitindoValorNome = new EventEmitter<string>();

  // boolTeste = false;

  // atualizaBooleano(valor: boolean){
  //   this.boolTeste = valor;
  // }

  trocarTitulo(event: any){
    if(this.deveMostrarTitulo){
      this.deveMostrarTitulo = false
    } else {
      this.deveMostrarTitulo = true
    }

    this.emitindoValorNome.emit(this.nome);
    this.enviaFormService.teste(event);
  }
}

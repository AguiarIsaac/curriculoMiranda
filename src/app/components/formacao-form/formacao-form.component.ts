import { Component, Input} from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

interface Formacoes {
  formacao: string,
  descCurso: string,
  iniEm: Date,
  finEm: Date,
  qtdHr: number,
  instituicao: string
}

@Component({
  selector: 'app-formacao-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './formacao-form.component.html',
  styleUrl: './formacao-form.component.css'
})
export class FormacaoFormComponent {
  @Input() formFormacao!: FormGroup;

  dialogFormacao!: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.dialogFormacao = this.fb.group({
  //     formacaoVal: [''],
  //     descCursoVal: [''],
  //     iniVal: [''],
  //     fimVal: [''],
  //     qtHrsVal: [''],
  //     instituicaoVal: ['']
  //   )}
  // }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  formacoes: Formacoes[] = []

  salvarFormacao() {

  }
}

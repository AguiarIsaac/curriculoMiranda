import { Component, Input} from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImportsModule } from '../imports';

interface Formacoes {
  formacaoVal: string,
  descCursoVal: string,
  iniVal: string,
  fimVal: string,
  qtHrsVal: number,
  instituicaoVal: string
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
  dialogFormFormacao!: FormGroup;

  formacoes: Formacoes[] = [
    {formacaoVal: 'Teste', descCursoVal: 'Teste', iniVal: '01/01/2001', fimVal: '02/02/2002', qtHrsVal: 20, instituicaoVal: 'Teste' }
  ]

  visible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.dialogFormFormacao = this.fb.group({
      formacaoVal: ['', Validators.required],
      descCursoVal: [''],
      iniVal: ['', Validators.required],
      fimVal: [''],
      qtHrsVal: [''],
      instituicaoVal: ['', Validators.required]
    })
  }

  get diaFormCntrl() {
    return this.dialogFormFormacao.controls;
  }

  showDialog() {
      this.dialogFormFormacao.setValue({formacaoVal: '', descCursoVal: '', iniVal: '', fimVal: '', qtHrsVal: null, instituicaoVal: ''})

      this.visible = true;
  }

  salvarFormacao() {
    if (this.dialogFormFormacao.valid) {
      let data = this.diaFormCntrl['iniVal'].value
      console.log("Data: "+data)

      this.formacoes.push(this.dialogFormFormacao.value);
      this.formFormacao.setValue({formacoesVal: this.formacoes})
      console.log("Formação Adicionada: ", this.formFormacao.value);

      this.visible = false;
    }
  }

  ativarBotao() {
    if (this.dialogFormFormacao.valid) {
      return true
    } else {
      return false
    }
  }

  listaSelFormacoes: string[] = [
    "ENSINO MÉDIO",
    "EXTRA CURRICULARES",
    "GRADUAÇÃO",
    "PÓS GRADUAÇÃO",
    "TECNÓLOGO"
  ]
}

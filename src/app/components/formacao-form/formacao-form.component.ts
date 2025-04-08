import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

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
  styleUrl: './formacao-form.component.css',
  providers: [ConfirmationService]
})
export class FormacaoFormComponent {
  @Input() formFormacao!: FormGroup;
  dialogFormFormacao!: FormGroup;

  formacoes: Formacoes[] = [
    {formacaoVal: 'ENSINO MÉDIO', descCursoVal: 'Teste1', iniVal: '01/01/2001', fimVal: '02/02/2002', qtHrsVal: 20, instituicaoVal: 'Teste' },
    {formacaoVal: 'ENSINO MÉDIO', descCursoVal: 'Teste2', iniVal: '01/01/2001', fimVal: '02/02/2002', qtHrsVal: 20, instituicaoVal: 'Teste' },
    {formacaoVal: 'ENSINO MÉDIO', descCursoVal: 'Teste3', iniVal: '01/01/2001', fimVal: '02/02/2002', qtHrsVal: 20, instituicaoVal: 'Teste' },
    {formacaoVal: 'ENSINO MÉDIO', descCursoVal: 'Teste4', iniVal: '01/01/2001', fimVal: '02/02/2002', qtHrsVal: 20, instituicaoVal: 'Teste' },
    {formacaoVal: 'ENSINO MÉDIO', descCursoVal: 'Teste5', iniVal: '01/01/2001', fimVal: '02/02/2002', qtHrsVal: 20, instituicaoVal: 'Teste' }
  ]

  visible: boolean = false;
  indexSelecionado: number | null = null;

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService) {
    this.dialogFormFormacao = this.fb.group({
      formacaoVal: ['', Validators.required],
      descCursoVal: ['', Validators.required],
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
      this.dialogFormFormacao.markAsPristine()
      this.dialogFormFormacao.markAsUntouched()

      this.visible = true;

      console.log(this.indexSelecionado + " || "+ this.formacoes.length)
  }

  editarFormacao(formacao: Formacoes, index: number) {
    this.indexSelecionado = index

    this.dialogFormFormacao.setValue({
      formacaoVal: formacao.formacaoVal,
      descCursoVal: formacao.descCursoVal,
      iniVal: formacao.iniVal,
      fimVal: formacao.fimVal,
      qtHrsVal: formacao.qtHrsVal,
      instituicaoVal: formacao.instituicaoVal
    })

    this.visible = true
  }

  salvarFormacao() {
    if (this.dialogFormFormacao.valid) {
      if (this.indexSelecionado != null) {
        this.formacoes[this.indexSelecionado] = this.dialogFormFormacao.value;
        console.log("Formação Editada: ", this.formacoes[this.indexSelecionado]);

        this.indexSelecionado = null;
        this.visible = false;
      } else {
        this.formacoes.push(this.dialogFormFormacao.value);
        this.formFormacao.setValue({formacoesVal: this.formacoes})
        console.log("Formação Adicionada: ", this.dialogFormFormacao.value);

        this.visible = false;
      }
    }
  }

  excluirFormacao(index: number) {
    this.formacoes.splice(index, 1)
    this.formFormacao.setValue({formacoesVal: this.formacoes})
    console.log("Formações restantes: ", this.formFormacao.value);
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

  confirm(event: Event, formacao: Formacoes, index: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'A formação '+formacao.formacaoVal+' será excluida, deseja continuar?',
        header: 'Excluir Registro',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        rejectButtonProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true,
        },
        acceptButtonProps: {
            label: 'Excluir',
            severity: 'danger'
        },

        accept: () => {
          this.excluirFormacao(index)
        }

    });
  }
}

import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImportsModule } from '../imports';
import { ConfirmationService } from 'primeng/api';

interface ExpProfissional {
  nomeEmpVal: string,
  tipEmpVal: string,
  endEmpVal: string,
  emailEmpVal: string,
  telEmpVal: string,
  dtAdmVal: string,
  dtDmsVal: string,
  ultCargoVal: string,
  ultSalVal: number,
  resAtvVal: string
}

@Component({
  selector: 'app-experiencia-profissional-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './experiencia-profissional-form.component.html',
  styleUrl: './experiencia-profissional-form.component.css',
  providers: [ConfirmationService]
})
export class ExperienciaProfissionalFormComponent {
  @Input() formExpProfissional!: FormGroup;
  dialogFormExpPro!: FormGroup;

  experienciaPro: ExpProfissional[] = [
    {nomeEmpVal: 'Teste1', tipEmpVal: 'Privada', endEmpVal: '', emailEmpVal: 'email@email.com', telEmpVal: '', dtAdmVal: '01/01/2020', dtDmsVal: '01/01/2025', ultCargoVal: 'teste', ultSalVal: 1200, resAtvVal: 'Teste'},
    {nomeEmpVal: 'Teste2', tipEmpVal: 'Privada', endEmpVal: '', emailEmpVal: 'email@email.com', telEmpVal: '', dtAdmVal: '01/01/2020', dtDmsVal: '01/01/2025', ultCargoVal: 'teste', ultSalVal: 1200, resAtvVal: 'Teste'},
    {nomeEmpVal: 'Teste3', tipEmpVal: 'Privada', endEmpVal: '', emailEmpVal: 'email@email.com', telEmpVal: '', dtAdmVal: '01/01/2020', dtDmsVal: '01/01/2025', ultCargoVal: 'teste', ultSalVal: 1200, resAtvVal: 'Teste'},
    {nomeEmpVal: 'Teste4', tipEmpVal: 'Privada', endEmpVal: '', emailEmpVal: 'email@email.com', telEmpVal: '', dtAdmVal: '01/01/2020', dtDmsVal: '01/01/2025', ultCargoVal: 'teste', ultSalVal: 1200, resAtvVal: 'Teste'},
    {nomeEmpVal: 'Teste5', tipEmpVal: 'Privada', endEmpVal: '', emailEmpVal: 'email@email.com', telEmpVal: '', dtAdmVal: '01/01/2020', dtDmsVal: '01/01/2025', ultCargoVal: 'teste', ultSalVal: 1200, resAtvVal: 'Teste'}
  ]

  visible: boolean = false;
  indexSelecionado: number | null = null;

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService) {
    this.dialogFormExpPro = this.fb.group({
        nomeEmpVal: ['', Validators.required],
        tipEmpVal: ['', Validators.required],
        endEmpVal: [''],
        emailEmpVal: ['', Validators.email],
        telEmpVal: [''],
        dtAdmVal: ['', Validators.required],
        dtDmsVal: [''],
        ultCargoVal: ['', Validators.required],
        ultSalVal: ['', Validators.required],
        resAtvVal: ['', Validators.required]
    })
  }

  get expProCntrl() {
    return this.dialogFormExpPro.controls;
  }

  showDialog() {
      this.dialogFormExpPro.setValue({
        nomeEmpVal: '',
        tipEmpVal: '',
        endEmpVal: '',
        emailEmpVal: '',
        telEmpVal: '',
        dtAdmVal: '',
        dtDmsVal: '',
        ultCargoVal: '',
        ultSalVal: null,
        resAtvVal: ''
      })
      this.dialogFormExpPro.markAsPristine()
      this.dialogFormExpPro.markAsUntouched()

      this.visible = true;

      console.log(this.indexSelecionado + " || "+ this.experienciaPro.length)
  }

  editarExpProfissional(exPro: ExpProfissional, index: number) {
    this.indexSelecionado = index

    this.dialogFormExpPro.setValue({
      nomeEmpVal: exPro.nomeEmpVal,
      tipEmpVal: exPro.tipEmpVal,
      endEmpVal: exPro.endEmpVal,
      emailEmpVal: exPro.emailEmpVal,
      telEmpVal: exPro.telEmpVal,
      dtAdmVal: exPro.dtAdmVal,
      dtDmsVal: exPro.dtDmsVal,
      ultCargoVal: exPro.ultCargoVal,
      ultSalVal: exPro.ultSalVal,
      resAtvVal: exPro.resAtvVal
    })

    this.visible = true
  }

  salvarExpProfissional() {
    if (this.dialogFormExpPro.valid) {
      if (this.indexSelecionado != null) {
        this.experienciaPro[this.indexSelecionado] = this.dialogFormExpPro.value;
        console.log("Experiëncia Profissional Editada: ", this.experienciaPro[this.indexSelecionado]);

        this.indexSelecionado = null;
        this.visible = false;
      } else {
        this.experienciaPro.push(this.dialogFormExpPro.value);
        this.formExpProfissional.setValue({experienciaProVal: this.experienciaPro})
        console.log("Experiëncia Profissional Adicionada: ", this.dialogFormExpPro.value);

        this.visible = false;
      }
    }
  }

  excluirExpProfissional(index: number) {
    this.experienciaPro.splice(index, 1)
    this.formExpProfissional.setValue({experienciaProVal: this.experienciaPro})
    console.log("Experiëncias Profissionais Restantes: ", this.formExpProfissional.value);
  }

  ativarBotao() {
    if (this.dialogFormExpPro.valid) {
      return true
    } else {
      return false
    }
  }

  listaTipEmp: string[] = [
    "Privada",
    "Pública",
    "Filantrópica"
  ]

  confirm(event: Event, exPro: ExpProfissional, index: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'O resgistro '+exPro.nomeEmpVal+' será excluido, deseja continuar?',
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
          this.excluirExpProfissional(index)
        }

    });
  }

}

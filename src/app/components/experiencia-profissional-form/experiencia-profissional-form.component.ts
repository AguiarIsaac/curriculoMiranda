import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImportsModule } from '../imports';
import { ConfirmationService } from 'primeng/api';

interface ExpProfissional {
  empAtualVal: string,
  nomeEmpVal: string,
  tipEmpVal: string,
  dtAdmVal: string,
  dtDmsVal: string,
  ultCargoVal: string,
  ultSalVal: number,
  resAtvVal: string,

  endEmpVal: string,
  estadoEmpVal: string,
  cidEmpVal: string,
  bairroEmpVal: string
  cepEmpVal: string,

  emailEmpVal: string,
  telEmpVal: string
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
    { empAtualVal: 'S', nomeEmpVal: 'Empresa Teste LTDA', tipEmpVal: 'Privada', dtAdmVal: '01/03/2018', dtDmsVal: '15/02/2024', ultCargoVal: 'Analista de Sistemas', ultSalVal: 3500, resAtvVal: 'Responsável pelo desenvolvimento e manutenção de sistemas web.', endEmpVal: 'Rua das Acácias, 123', estadoEmpVal: 'SP', cidEmpVal: 'São Paulo', bairroEmpVal: 'Centro', cepEmpVal: '01001-000', emailEmpVal: 'contato@empresateste.com', telEmpVal: '(11) 98765-4321' },
    { empAtualVal: 'N', nomeEmpVal: 'Construtora Modelo', tipEmpVal: 'Pública', dtAdmVal: '10/05/2015', dtDmsVal: '22/08/2020', ultCargoVal: 'Engenheiro Civil', ultSalVal: 7200, resAtvVal: 'Supervisão de obras e coordenação de equipes.', endEmpVal: 'Av. Brasil, 5000', estadoEmpVal: 'RJ', cidEmpVal: 'Rio de Janeiro', bairroEmpVal: 'Copacabana', cepEmpVal: '22050-002', emailEmpVal: 'rh@construtoramodelo.gov.br', telEmpVal: '(21) 98888-1234' },
    { empAtualVal: 'N', nomeEmpVal: 'Comércio Boa Compra', tipEmpVal: 'Privada', dtAdmVal: '01/01/2012', dtDmsVal: '30/06/2017', ultCargoVal: 'Vendedor', ultSalVal: 1800, resAtvVal: 'Atendimento ao cliente e organização de estoque.', endEmpVal: 'Rua das Laranjeiras, 89', estadoEmpVal: 'MG', cidEmpVal: 'Belo Horizonte', bairroEmpVal: 'Savassi', cepEmpVal: '30130-150', emailEmpVal: 'contato@boacompra.com.br', telEmpVal: '(31) 99876-5432' },
    { empAtualVal: 'S', nomeEmpVal: 'Tech Global', tipEmpVal: 'Multinacional', dtAdmVal: '15/09/2020', dtDmsVal: '08/04/2025', ultCargoVal: 'Desenvolvedor Full Stack', ultSalVal: 8500, resAtvVal: 'Desenvolvimento de aplicações web e mobile.', endEmpVal: 'Av. Paulista, 1000', estadoEmpVal: 'SP', cidEmpVal: 'São Paulo', bairroEmpVal: 'Bela Vista', cepEmpVal: '01310-100', emailEmpVal: 'jobs@techglobal.com', telEmpVal: '(11) 91234-5678' },
    { empAtualVal: 'N', nomeEmpVal: 'Serviços Rápidos ME', tipEmpVal: 'MEI', dtAdmVal: '20/02/2010', dtDmsVal: '10/10/2014', ultCargoVal: 'Auxiliar Administrativo', ultSalVal: 1500, resAtvVal: 'Organização de documentos e atendimento telefônico.', endEmpVal: 'Rua Flor de Lis, 45', estadoEmpVal: 'RS', cidEmpVal: 'Porto Alegre', bairroEmpVal: 'Moinhos de Vento', cepEmpVal: '90570-120', emailEmpVal: 'admin@servrapidos.com', telEmpVal: '(51) 99999-9999' }
  ]

  visible: boolean = false;
  indexSelecionado: number | null = null;

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService) {
    this.dialogFormExpPro = this.fb.group({
        empAtualVal: ['N'],
        nomeEmpVal: ['', Validators.required],
        tipEmpVal: ['', Validators.required],
        dtAdmVal: ['', Validators.required],
        dtDmsVal: [''],
        ultCargoVal: ['', Validators.required],
        ultSalVal: ['', Validators.required],
        resAtvVal: ['', Validators.required],

        endEmpVal: [''],
        estadoEmpVal: [''],
        cidEmpVal: ['', Validators.required],
        bairroEmpVal: [''],
        cepEmpVal: ['', Validators.pattern('\\d{5}\\-\\d{3}')],

        emailEmpVal: ['', Validators.email],
        telEmpVal: [''],
    })
  }

  get expProCntrl() {
    return this.dialogFormExpPro.controls;
  }

  showDialog() {
      this.dialogFormExpPro.setValue({
        empAtualVal: 'N',
        nomeEmpVal: '',
        tipEmpVal: '',
        dtAdmVal: '',
        dtDmsVal: '',
        ultCargoVal: '',
        ultSalVal: null,
        resAtvVal: '',

        endEmpVal: '',
        estadoEmpVal: '',
        cidEmpVal: '',
        bairroEmpVal: '',
        cepEmpVal: '',

        emailEmpVal: '',
        telEmpVal: '',
      })
      this.dialogFormExpPro.markAsPristine()
      this.dialogFormExpPro.markAsUntouched()

      this.visible = true;

      console.log(this.indexSelecionado + " || "+ this.experienciaPro.length)
  }

  editarExpProfissional(exPro: ExpProfissional, index: number) {
    this.indexSelecionado = index

    this.dialogFormExpPro.setValue({
      empAtualVal: exPro.empAtualVal,
      nomeEmpVal: exPro.nomeEmpVal,
      tipEmpVal: exPro.tipEmpVal,
      dtAdmVal: exPro.dtAdmVal,
      dtDmsVal: exPro.dtDmsVal,
      ultCargoVal: exPro.ultCargoVal,
      ultSalVal: exPro.ultSalVal,
      resAtvVal: exPro.resAtvVal,

      endEmpVal: exPro.endEmpVal,
      estadoEmpVal: exPro.estadoEmpVal,
      cidEmpVal: exPro.cidEmpVal,
      bairroEmpVal: exPro.bairroEmpVal,
      cepEmpVal: exPro.cepEmpVal,

      emailEmpVal: exPro.emailEmpVal,
      telEmpVal: exPro.telEmpVal

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

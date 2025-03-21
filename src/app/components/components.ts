import { NgModule } from '@angular/core';
import { DadosPessoaisFormComponent } from './dados-pessoais-form/dados-pessoais-form.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { AreaInteresseFormComponent } from './area-interesse-form/area-interesse-form.component';
import { InfosAdicionaisFormComponent } from './infos-adicionais-form/infos-adicionais-form.component';
import { FormacaoFormComponent } from './formacao-form/formacao-form.component';
import { ExperienciaProfissionalFormComponent } from './experiencia-profissional-form/experiencia-profissional-form.component';
import { BotoesComponent } from './botoes/botoes.component';

@NgModule({
    imports: [
      DadosPessoaisFormComponent,
      EnderecoFormComponent,
      ContatoFormComponent,
      AreaInteresseFormComponent,
      InfosAdicionaisFormComponent,
      FormacaoFormComponent,
      ExperienciaProfissionalFormComponent,
      BotoesComponent
    ],
    exports: [
      DadosPessoaisFormComponent,
      EnderecoFormComponent,
      ContatoFormComponent,
      AreaInteresseFormComponent,
      InfosAdicionaisFormComponent,
      FormacaoFormComponent,
      ExperienciaProfissionalFormComponent,
      BotoesComponent
    ],
    providers: [ ]
})
export class componentsModule {}

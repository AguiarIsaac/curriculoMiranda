import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-experiencia-profissional-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './experiencia-profissional-form.component.html',
  styleUrl: './experiencia-profissional-form.component.css'
})
export class ExperienciaProfissionalFormComponent {
  @Input() formExpProfissional!: FormGroup;

  get expProCntrl() {
    return this.formExpProfissional.controls;
  }

}

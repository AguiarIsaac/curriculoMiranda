import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-area-interesse-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './area-interesse-form.component.html',
  styleUrl: './area-interesse-form.component.css'
})
export class AreaInteresseFormComponent {
  @Input() formAreaInteresse!: FormGroup;

  get areaIntCntrl() {
    return this.formAreaInteresse.controls
  }
}

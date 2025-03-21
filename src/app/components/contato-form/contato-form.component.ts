import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImportsModule } from '../imports';


@Component({
  selector: 'app-contato-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './contato-form.component.html',
  styleUrl: './contato-form.component.css'
})
export class ContatoFormComponent {
  @Input() formContato!: FormGroup;

  get contCntrl() {
    return this.formContato.controls;
  }
}

import { Component } from '@angular/core';
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
  formContato: FormGroup;

  constructor (private fb: FormBuilder) {
    this.formContato = this.fb.group({
      telResVal: [''],
      celVal: ['', Validators.required],
      emailVal: ['', [Validators.required, Validators.email]],
      lkdInVal: [''],
      facebookVal: [''],
      instagramVal: ['']
    })
  }

  get contCntrl() {
    return this.formContato.controls;
  }
}

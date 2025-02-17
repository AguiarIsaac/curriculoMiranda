import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  teste(event: any){
    console.log(event);
  }
}

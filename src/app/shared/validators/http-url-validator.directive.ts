import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[httpUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: HttpUrlValidatorDirective, multi: true}]
})
export class HttpUrlValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any; } {
    let re = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;

    if(c.value && !re.test(c.value))
      return { httpUrlValidator: true }
    else
      return null;
  }

}

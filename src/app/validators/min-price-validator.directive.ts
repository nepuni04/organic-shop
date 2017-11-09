import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[minProductPrice]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinPriceValidatorDirective, multi: true}]
})

export class MinPriceValidatorDirective implements Validator {  

  validate(c: AbstractControl): { [key: string]: any; } {
    if(c.value && c.value <= 0)
      return { minProductPrice: true };
    else 
      return null;
  }
  
}

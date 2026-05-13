import { AbstractControl, ValidationErrors } from "@angular/forms";

export function NameArticleValidator(control: AbstractControl): ValidationErrors | null {
  const forbidden = ['prueba', 'test', 'mock', 'fake'];
  const value = control.value?.trim().toLowerCase();

  if (forbidden.includes(value)) {
    return { forbiddenName: { value } };
  }
  return null;
}

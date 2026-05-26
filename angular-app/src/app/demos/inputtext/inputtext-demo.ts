import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';

type Variant = 'outlined' | 'filled';
type Size = 'small' | 'large' | undefined;

@Component({
  selector: 'app-inputtext-demo',
  imports: [InputText, FormsModule],
  templateUrl: './inputtext-demo.html',
})
export class InputTextDemoComponent {
  readonly variants: { label: string; value: Variant }[] = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];
  readonly sizes: { label: string; value: Size }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: undefined },
    { label: 'Large', value: 'large' },
  ];

  variant: Variant = 'outlined';
  size: Size = undefined;
  disabled = false;
  invalid = false;
  fluid = false;
  value = '';
}

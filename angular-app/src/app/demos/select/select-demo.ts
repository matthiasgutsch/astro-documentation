import { Component } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';

type Variant = 'outlined' | 'filled' | undefined;
type Size = 'small' | 'large' | undefined;

@Component({
  selector: 'app-select-demo',
  imports: [Select, FormsModule],
  templateUrl: './select-demo.html',
})
export class SelectDemoComponent {
  readonly variants: { label: string; value: Variant }[] = [
    { label: 'Outlined', value: undefined },
    { label: 'Filled', value: 'filled' },
  ];
  readonly sizes: { label: string; value: Size }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: undefined },
    { label: 'Large', value: 'large' },
  ];

  options = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Solid', value: 'solid' },
  ];

  selectedOption: string | null = null;
  variant: Variant = undefined;
  size: Size = undefined;
  disabled = false;
  showClear = false;
  fluid = false;
  invalid = false;
  loading = false;
  filter = false;
}

import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Button } from 'primeng/button';

type Severity = 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast';
type Variant = 'outlined' | 'text' | undefined;
type Size = 'small' | 'large' | undefined;

@Component({
  selector: 'app-button-demo',
  imports: [Button],
  templateUrl: './button-demo.html',
})
export class ButtonDemoComponent {
  readonly severities: { label: string; value: Severity | null }[] = [
    { label: 'Primary', value: null },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Info', value: 'info' },
    { label: 'Warning', value: 'warn' },
    { label: 'Danger', value: 'danger' },
    { label: 'Contrast', value: 'contrast' },
  ];
  readonly variants: { label: string; value: Variant }[] = [
    { label: 'Filled', value: undefined },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Text', value: 'text' },
  ];
  readonly sizes: { label: string; value: Size }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: undefined },
    { label: 'Large', value: 'large' },
  ];

  severity: Severity | null = null;
  variant: Variant = undefined;
  size: Size = undefined;
  raised = false;
  rounded = false;
  disabled = false;
  withIcon = false;
  loading = false;
}

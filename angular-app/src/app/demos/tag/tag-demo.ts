import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Tag } from 'primeng/tag';

type Severity = 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast';
type Size = 'small' | 'large' | undefined;

@Component({
  selector: 'app-tag-demo',
  imports: [Tag],
  templateUrl: './tag-demo.html',
})
export class TagDemoComponent {
  readonly severities: { label: string; value: Severity | null }[] = [
    { label: 'Primary', value: null },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Info', value: 'info' },
    { label: 'Warning', value: 'warn' },
    { label: 'Danger', value: 'danger' },
    { label: 'Contrast', value: 'contrast' },
  ];
  readonly sizes: { label: string; value: Size }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: undefined },
    { label: 'Large', value: 'large' },
  ];

  severity: Severity | null = null;
  size: Size = undefined;
  rounded = false;
  withIcon = false;
}

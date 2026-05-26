import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';

type Severity = 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast';
type Variant = 'outlined' | 'text' | undefined;
type Size = 'small' | 'large' | undefined;

@Component({
  selector: 'app-button-preview',
  imports: [Button],
  template: `
    <div class="wrap">
      <p-button
        [label]="label"
        [severity]="severity"
        [variant]="variant"
        [size]="size"
        [raised]="raised"
        [rounded]="rounded"
        [disabled]="disabled"
        [loading]="loading"
        [icon]="icon"
      />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .wrap {
        padding: 1rem 1.25rem;
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class ButtonPreviewComponent implements OnInit {
  label = 'Button';
  severity: Severity | null = null;
  variant: Variant = undefined;
  size: Size = undefined;
  raised = false;
  rounded = false;
  disabled = false;
  loading = false;
  icon = '';

  ngOnInit() {
    const hash = window.location.hash;
    const qIdx = hash.indexOf('?');
    if (qIdx === -1) return;
    const p = new URLSearchParams(hash.slice(qIdx + 1));

    const severity = p.get('severity') as Severity | null;
    if (severity) this.severity = severity;

    const variant = p.get('variant');
    if (variant === 'outlined') this.variant = 'outlined';
    if (variant === 'text') this.variant = 'text';

    const size = p.get('size');
    if (size === 'small') this.size = 'small';
    if (size === 'large') this.size = 'large';

    this.raised = p.get('raised') === 'true';
    this.rounded = p.get('rounded') === 'true';
    this.disabled = p.get('disabled') === 'true';
    this.loading = p.get('loading') === 'true';

    if (p.get('icon') === 'true') this.icon = 'pi pi-check';

    const label = p.get('label');
    if (label) this.label = label;
  }
}

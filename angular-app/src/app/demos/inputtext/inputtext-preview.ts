import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';

type Variant = 'outlined' | 'filled';
type Size = 'small' | 'large' | undefined;

@Component({
  selector: 'app-inputtext-preview',
  imports: [InputText, FormsModule],
  template: `
    <div class="wrap">
      <input
        pInputText
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [invalid]="invalid"
        [fluid]="fluid"
        [(ngModel)]="value"
        placeholder="Enter text..."
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
export class InputTextPreviewComponent implements OnInit {
  variant: Variant = 'outlined';
  size: Size = undefined;
  disabled = false;
  invalid = false;
  fluid = false;
  value = '';

  ngOnInit() {
    const hash = window.location.hash;
    const qIdx = hash.indexOf('?');
    if (qIdx === -1) return;
    const p = new URLSearchParams(hash.slice(qIdx + 1));

    const variant = p.get('variant');
    if (variant === 'filled') this.variant = 'filled';

    const size = p.get('size');
    if (size === 'small') this.size = 'small';
    else if (size === 'large') this.size = 'large';

    if (p.get('disabled') === 'true') this.disabled = true;
    if (p.get('invalid') === 'true') this.invalid = true;
    if (p.get('fluid') === 'true') this.fluid = true;
  }
}

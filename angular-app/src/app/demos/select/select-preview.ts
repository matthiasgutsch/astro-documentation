import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-select-preview',
  imports: [Select, FormsModule],
  template: `
    <div class="wrap">
      <p-select
        [(ngModel)]="value"
        [options]="options"
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [invalid]="invalid"
        [loading]="loading"
        [fluid]="fluid"
        [showClear]="showClear"
        [filter]="filter"
        [checkmark]="checkmark"
        placeholder="Select option"
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
export class SelectPreviewComponent implements OnInit {
  readonly options = ['Angular', 'React', 'Vue', 'Svelte', 'Solid'];
  value: string | undefined;

  variant: 'outlined' | 'filled' | undefined;
  size: 'small' | 'large' | undefined;
  disabled = false;
  invalid = false;
  loading = false;
  fluid = false;
  showClear = false;
  filter = false;
  checkmark = false;

  ngOnInit() {
    const hash = window.location.hash;
    const qIdx = hash.indexOf('?');
    if (qIdx === -1) return;
    const p = new URLSearchParams(hash.slice(qIdx + 1));

    const variant = p.get('variant');
    if (variant === 'filled') this.variant = 'filled';

    const size = p.get('size');
    if (size === 'small') this.size = 'small';
    if (size === 'large') this.size = 'large';

    this.disabled = p.get('disabled') === 'true';
    this.invalid = p.get('invalid') === 'true';
    this.loading = p.get('loading') === 'true';
    this.fluid = p.get('fluid') === 'true';
    this.showClear = p.get('showClear') === 'true';
    this.filter = p.get('filter') === 'true';
    this.checkmark = p.get('checkmark') === 'true';
  }
}

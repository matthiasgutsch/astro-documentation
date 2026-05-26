import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-select-variants',
  imports: [Select, FormsModule],
  templateUrl: './select-variants.html',
  styles: [
    `
      :host {
        display: block;
      }
      .variants {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .group-title {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #64748b;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.5rem;
      }
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: flex-start;
      }
      .item {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        min-width: 160px;
      }
      .label {
        font-size: 0.75rem;
        color: #475569;
      }
      p-select {
        width: 160px;
      }
    `,
  ],
})
export class SelectVariantsComponent {
  readonly options = ['Angular', 'React', 'Vue', 'Svelte', 'Solid'];
  v: { [key: string]: string } = {};
}

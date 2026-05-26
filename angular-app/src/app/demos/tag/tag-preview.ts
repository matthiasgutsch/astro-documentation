import { Component, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag';

type Severity = 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast';

@Component({
  selector: 'app-tag-preview',
  imports: [Tag],
  template: `
    <div class="wrap">
      <p-tag [value]="value" [severity]="severity" [rounded]="rounded" [icon]="icon" />
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
export class TagPreviewComponent implements OnInit {
  value = 'Tag';
  severity: Severity | null = null;
  rounded = false;
  icon = '';

  ngOnInit() {
    const hash = window.location.hash;
    const qIdx = hash.indexOf('?');
    if (qIdx === -1) return;
    const p = new URLSearchParams(hash.slice(qIdx + 1));

    const severity = p.get('severity') as Severity | null;
    if (severity) this.severity = severity;

    this.rounded = p.get('rounded') === 'true';

    if (p.get('icon') === 'true') this.icon = 'pi pi-check';

    const value = p.get('value');
    if (value) this.value = value;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-catalog',
  templateUrl: './color-catalog.component.html',
  styleUrls: ['./color-catalog.component.scss'],
})
export class ColorCatalogComponent {
  @Input()
  colors: {
    name: string;
    value: string;
    opacity?: number;
  }[];
}

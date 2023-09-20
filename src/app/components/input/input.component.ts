import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  /**
   * Input Label
   */
  @Input()
  label = 'Texto';

  /**
   * Disables input
   */
  @Input()
  disabled: boolean = false;
}

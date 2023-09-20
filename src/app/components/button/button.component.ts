import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonTypeOptions } from 'src/app/enum/enum';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Disable button
   */
  @Input()
  disabled?: boolean = false;

  /**
   * Which button it should be
   */
  @Input()
  buttonType?: ButtonTypeOptions;

  /**
   * Examplo de pick color nos controles do storybook
   */
  @Input()
  backgroundColor?: string;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public selected = false;
  public ButtonTypeOptions = ButtonTypeOptions;

  selectButton(event: any): void {
    this.selected = !this.selected;
    this.onClick.emit(event);
  }
}

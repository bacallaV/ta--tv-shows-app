import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TvShowDto } from '@models/tv-show.model';

@Component({
  selector: 'app-tv-show-form',
  templateUrl: './tv-show-form.component.html',
  styleUrls: ['./tv-show-form.component.scss']
})
export class TvShowFormComponent {
  public form: FormGroup;

  @Input()
  public diableButton: boolean = false;

  @Output()
  public onSubmitData: EventEmitter<TvShowDto> = new EventEmitter();

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:       ['',    [Validators.required]],
      favorite:   [false, [Validators.required]],
    });
  }

  public submitData(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.onSubmitData.emit(this.form.value);
  }

  public get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  public get favoriteControl(): FormControl {
    return this.form.get('favorite') as FormControl;
  }
}

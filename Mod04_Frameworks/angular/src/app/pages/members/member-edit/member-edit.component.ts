import {
  Component,
  Input,
  OnInit,
  inject,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgIf } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Member } from '../../../interfaces/interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatButtonModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.scss',
})
export class MemberEditComponent implements OnInit, OnChanges {
  @Input()
  member!: Member;

  @Output()
  saveEvent: EventEmitter<Member> = new EventEmitter();

  editForm!: FormGroup;
  idControl!: FormControl;
  loginControl!: FormControl;
  avatarControl!: FormControl;

  private fb = inject(FormBuilder);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['member'].currentValue) {
      this.editForm.patchValue(this.member);
    }
  }

  ngOnInit(): void {
    this.initEditForm();
  }

  initEditForm() {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', [Validators.required, Validators.minLength(6)]],
      avatar_url: '',
    });
    this.idControl = this.editForm.get('id') as FormControl;
    this.loginControl = this.editForm.get('login') as FormControl;
    this.avatarControl = this.editForm.get('avatar_url') as FormControl;
  }

  handleEditFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.avatarControl.setValue(reader.result);
    };
  }

  save(): void {
    if (this.editForm.valid) {
      const member = this.editForm.value;
      this.saveEvent.emit(member);
    }
  }
}

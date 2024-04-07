import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Member } from '../../../interfaces/interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-member-add',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './member-add.component.html',
  styleUrl: './member-add.component.scss',
})
export class MemberAddComponent implements OnInit {
  newMember!: Member;
  @Input()
  members!: Member[];

  constructor() {}
  ngOnInit(): void {
    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  add(): void {
    this.members.push(this.newMember);
    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }
  handleFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.newMember.avatar_url = reader.result as string;
    };
  }
}

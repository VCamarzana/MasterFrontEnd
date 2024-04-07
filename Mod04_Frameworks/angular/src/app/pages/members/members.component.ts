import { Component, inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../../interfaces/interfaces';
import { MembersService } from '../../services/members.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberAddComponent } from './member-add/member-add.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MemberEditComponent,
    MemberAddComponent,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  newMember!: Member;
  memberSelected!: Member;

  private membersService = inject(MembersService);

  ngOnInit(): void {
    this.membersService
      .getAll()
      .subscribe((members) => (this.members = members));
  }

  delete(member: Member): void {
    const index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }

  select(member: Member): void {
    this.memberSelected = { ...member };
  }

  save(member: Member) {
    this.members = [...this.members];
    const index = this.members.findIndex((item) => item.id === member.id);
    this.members.splice(index, 1, member);
  }
}

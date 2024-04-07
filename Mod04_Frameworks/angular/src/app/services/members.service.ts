import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Member[]> {
    return this.http.get<Member[]>(
      'https://api.github.com/orgs/lemoncode/members'
    );
  }
}

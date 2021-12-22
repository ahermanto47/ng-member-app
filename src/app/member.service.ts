import { Injectable } from '@angular/core';
import { Member } from './member'
//import { MEMBERS } from './mock-members'
import { Observable, of} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'http://localhost:8080/api/members';  // URL to web api
  
  constructor(
	private http: HttpClient
  ) { }
  
  getMembers(): Observable<Member[]> {
	//const members = of(MEMBERS)
    //return members;
    return this.http.get<Member[]>(this.membersUrl)
  }
}

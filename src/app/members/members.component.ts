import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service'
//import { MEMBERS } from './mock-members'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  
  selectedMember?: Member;
  
  onSelect(member: Member): void {
    this.selectedMember = member;
  }
  
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
	this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(
	  members => this.members = members
    );
  }
}

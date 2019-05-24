import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';
import { Inbox } from './../inbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  listMsg: Inbox;

  constructor(
    private data: InboxService,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.getAllMsg().subscribe(
      (res) => this.listMsg = res
    )
  }

  openMsg(id) {
    this.router.navigate(['inbox', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';
import { Inbox } from './../inbox';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-inbox',
  templateUrl: './single-inbox.component.html',
  styleUrls: ['./single-inbox.component.css']
})
export class SingleInboxComponent implements OnInit {

  msg: Inbox;

  constructor(
    private route: ActivatedRoute,
    private data: InboxService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.data.getMsg(+params.get('id')).subscribe(
        (res) => {
          this.msg = res
        }
      )
    })
  }

}

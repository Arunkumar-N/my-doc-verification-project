import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-doc-verification',
  templateUrl: './my-doc-verification.component.html',
  styleUrls: [ './my-doc-verification.module.scss' ]
})
export class MyDocVerificationComponent implements OnInit {

  verified = false;
  showModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}

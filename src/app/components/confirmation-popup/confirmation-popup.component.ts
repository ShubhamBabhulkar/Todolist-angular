import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  newsId: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.newsId = data.news_id;
  }

  ngOnInit() {
  }

}




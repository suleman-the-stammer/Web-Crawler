import { Component, OnInit } from '@angular/core';
import { BbcArticlesService } from '../bbc-articles.service';

@Component({
  selector: 'app-bbc-articles',
  templateUrl: './bbc-articles.component.html',
  styleUrls: ['./bbc-articles.component.css'],
})
export class BbcArticlesComponent implements OnInit {
  data: unknown[] = [];

  constructor(private bbcService: BbcArticlesService) {}

  ngOnInit(): void {
    this.bbcService.getArticles().subscribe((data) => {
      this.data = data;
    });
  }
}

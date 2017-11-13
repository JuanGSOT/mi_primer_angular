import { Component, OnInit } from '@angular/core';
import { Article } from './Article'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  //englobando todo este componente se usara una clase llamada row de semantic-ui-css
  host: {
    class: 'row'
  },
  inputs: ['article']
})
export class ArticleComponent implements OnInit {
  article: Article
  votes: number = 20
  constructor() { 

  }

  ngOnInit() {
  }

  voteUp() {
    //definimos la interface
    this.article.voteUp()
    return false
  }

  voteDown() {
    this.article.votesDown()
    return false
  }
}

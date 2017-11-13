import { Component, OnInit } from '@angular/core';
import { Article } from '../article/Article'
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
articles: Article[]
  constructor() {
    this.articles = [
      new Article('Angular4', 'http://angular.io',10),
      new Article('Google', 'http://google.com.mx',20),
      new Article('AnimeFLV', 'http://animeflv.net',15)
    ]
    
   }

  ngOnInit() {
  }

  addArticle(
    title: HTMLInputElement, 
    link: HTMLInputElement
  ): boolean{
    console.log(`Arituclo agregado ${title.value}, link ${link.value}`);
    this.articles.push(
      new Article(title.value, link.value)
    )
    title.value = ''
    link.value = ''
    return false;// cancela el evento de recargar la pagina
  }

  sortedArticles(): Article[] {
    return  this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}

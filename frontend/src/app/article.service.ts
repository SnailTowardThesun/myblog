import { Injectable } from '@angular/core';
import { Article, Comment, Category } from './module/article';

@Injectable()
export class ArticleService {

  constructor() { }

  getAritcleByPage(page: number): Article[] {
    const arr: Article[] = [
    ];

    return arr;
  }

  getArticlePages(): number {
    return 0;
  }

  getArticleComments(article: Article): Comment[] {
    const comments: Comment[] = [

    ];

    return comments;
  }

  getTopCategoeries(top: number): Category[] {
    const categories: Category[] = [

    ];

    return categories;
  }
}

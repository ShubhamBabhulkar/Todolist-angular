import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpRequest: HttpClient) { }
  private baseUrl = 'http://localhost:3000/news';

  addTodo = (news) => {
    return this.httpRequest.post(this.baseUrl, news);
  }

  getNews = () => {
    return this.httpRequest.get(this.baseUrl);
  }

  getMyNews = () => {
    return this.httpRequest.get(this.baseUrl + '/mynews');
  }

  deleteNews = (newsId) => {
    return this.httpRequest.delete(this.baseUrl + '/' + newsId);
  }

  editNews = (newsId, editedNews) => {
    return this.httpRequest.patch(this.baseUrl + '/' + newsId, editedNews);
  }
}

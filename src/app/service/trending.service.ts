import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GiphyClass } from '../giphy-class';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  
  apiUrl = "api.giphy.com/v1/gifs/trending"
  apiKey = "CZnwNLubIuJisutebz5OjZ3nq9IOHMCp"
  constructor(private http: HttpClient) { }

  getGiphys():Observable<GiphyClass>{
    return this.http.get<GiphyClass>(
      `${this.apiUrl}+api_key= ${this.apiKey}`)

   
  }
}

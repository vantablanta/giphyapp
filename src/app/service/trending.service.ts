import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  apiUrl = "api.giphy.com/v1/gifs/trending"

  constructor(private http: HttpClient) { }

  getGiphys(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=50`)
  }

}

import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})


export class GiphyComponent implements OnInit {

gifs: any[] = []

  constructor(public trendingService: TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getGiphys().subscribe(
      (response: any)=> {
        this.gifs = response.data
        console.log(this.gifs)
      }
    )
  }

}

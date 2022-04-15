import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})


export class GiphyComponent implements OnInit {


  constructor(public trendingService: TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getGiphys().subscribe(
      response=> {
        console.log(response)
      }
    )
  }

}

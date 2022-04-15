import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending.service';
import { GiphyClass } from 'src/app/giphy-class';
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  giphys!: GiphyClass
  constructor(private trendingService: TrendingService) { }

  ngOnInit(): void {
     this.trendingService.getGiphys().subscribe(
      (data) => console.log(data)
    )
  }

}

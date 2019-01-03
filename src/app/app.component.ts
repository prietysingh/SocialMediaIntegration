import { Component } from '@angular/core';
import { TweetsService } from 'src/shared/services/tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'socialmediaintegrationweb';
  public gridData: any[];
  public searchText: string;


  constructor(private _tweetsService: TweetsService) { }

  ngOnInit() {}

  public searchTweets() {
    this.gridData = [];
    this._tweetsService.getTweets(this.searchText).subscribe((tweets: any) => {
      this.parseTweets(tweets);
    });
  }

  public clear() {
    this.searchText = "";
  }

  private parseTweets(tweets: any) {
    console.log(tweets);
    let hashtagsUsed = [];
    tweets.forEach((tweet:any) => {
      if(tweet.entities.hashtags.length > 0) {
        tweet.entities.hashtags.forEach((hashtag: any)=> {
          hashtagsUsed.push(hashtag.text);
        });
      }
      this.gridData.push({
        name: tweet.user.name,
        screenName: tweet.user.screen_name,
        text: tweet.text,
        createdAt: tweet.created_at,
        url: tweet.user.url,
        hastags: hashtagsUsed
      });
      hashtagsUsed = [];
    });
  }

}

import { Injectable } from '@angular/core';

const GIPHY_API_KEy = 'sW9863AI2gfsvnIc41NY78SB6VCpFGZf';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'sW9863AI2gfsvnIc41NY78SB6VCpFGZf';

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag != tag )
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {

    if(tag.length == 0) return;
    this.organizeHistory(tag);
    console.log(this.tagsHistory);

  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  searchTag(): void {
    const text = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(text);
    this.tagInput.nativeElement.value = '';
  }

}

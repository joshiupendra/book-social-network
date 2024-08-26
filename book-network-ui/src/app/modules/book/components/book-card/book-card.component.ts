import { Component, Input } from '@angular/core';
import { BookResponse } from '../../../../services/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  private _book: BookResponse = {};
  private _bookCover: string | undefined;
  private _manage: boolean = false;

  get book(): BookResponse {
    return this._book;
  }

  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }

  get bookCover(): string | undefined {
    if (this._book.cover) {
      return "data:image/jpg;base64, " + this._book.cover;
    }
    return "https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg";
  }

  set bookCover(value: string | undefined) {
    this._bookCover = value;
  }

  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  onShowDetails() {}

  onBorrow() {}

  onAddToWaitingList() {}

  onEdit() {}

  onShare() {}

  onArchive() {}
}

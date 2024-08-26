import { Component, OnInit } from '@angular/core';
import { PageResponseBorrowedBookResponse } from '../../../../services/models/page-response-borrowed-book-response';
import { BookService } from '../../../../services/services/book.service';
import { BorrowedBookResponse } from '../../../../services/models';

@Component({
  selector: 'app-returned-book-list',
  templateUrl: './returned-book-list.component.html',
  styleUrl: './returned-book-list.component.scss'
})
export class ReturnedBookListComponent implements OnInit {

  page: number = 0;
  size: number = 5;
  returnedBooks: PageResponseBorrowedBookResponse = {};
  message: string = "";
  level: string = "success";

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.findAllReturnedBooks();  
  }

  findAllReturnedBooks() {
    this.bookService.findAllReturnedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (response) => {
        this.returnedBooks = response;
      }
    });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllReturnedBooks();
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllReturnedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedBooks();
  }

  goToLastPage() {
    this.page = this.returnedBooks.totalPages as number - 1;
    this.findAllReturnedBooks();
  }

  get isLastPage(): boolean {
    return this.page == this.returnedBooks.totalPages as number - 1;
  }

  approveBookReturn(book: BorrowedBookResponse): void {
    if (!book.returned) {
      this.level = "error";
      this.message = "The book is not yet returned";
      return;
    }
    this.bookService.approveReturnBorrowedBook({
      "book-id": book.id as number
    }).subscribe({
      next: () => {
        this.level = "success";
        this.message = "Book Return Approved";
        this.findAllReturnedBooks();
      },
      error: (err) => {
        this.level = "error";
        this.message = err.error.error;
      }
    })
  }
}

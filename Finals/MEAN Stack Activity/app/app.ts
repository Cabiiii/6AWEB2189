import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";
  books: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => {
      this.books = data;
    });
  }

  addBook() {
    const title = (<HTMLInputElement>document.getElementById("newBook")).value;
    const author = (<HTMLInputElement>document.getElementById("newAuthor")).value;
    const desc = (<HTMLInputElement>document.getElementById("newDesc")).value;
    const price = (<HTMLInputElement>document.getElementById("newPrice")).value;
    const category = (<HTMLInputElement>document.getElementById("newCategory")).value;

    const tempId = Date.now().toString();
    const newBookLocal = {
      id: tempId,
      title: title,
      author: author,
      desc: desc,
      price: price,
      category: category
    };

    this.books = [newBookLocal, ...this.books];
    this.clearForm();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("category", category);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe({
      next: () => {
        this.refreshBooks();
      },
      error: (err) => {
        this.books = this.books.filter((b: any) => b.id !== tempId);
        alert("Server error: Could not save book.");
        console.error(err);
      }
    });
  }

  deleteBook(id: any) {
    const originalBooks = [...this.books];
    this.books = this.books.filter((book: any) => book.id !== id);

    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe({
      next: () => {
      },
      error: (err) => {
        this.books = originalBooks;
        alert("Delete failed on server.");
      }
    });
  }

  clearForm() {
    const ids = ["newBook", "newAuthor", "newDesc", "newPrice", "newCategory"];
    ids.forEach(id => {
      const el = <HTMLInputElement>document.getElementById(id);
      if (el) el.value = "";
    });
  }
}

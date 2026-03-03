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

  // Edit State
  isEditMode = false;
  currentEditId: string | null = null;

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
    const newBookLocal = { id: tempId, title, author, desc, price, category };

    this.books = [newBookLocal, ...this.books];
    this.clearForm();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("category", category);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe({
      next: () => this.refreshBooks(),
      error: (err) => {
        this.books = this.books.filter((b: any) => b.id !== tempId);
        alert("Server error: Could not save book.");
      }
    });
  }

  // NEW: Fill form with book data
  editBook(book: any) {
    this.isEditMode = true;
    this.currentEditId = book.id;

    (<HTMLInputElement>document.getElementById("newBook")).value = book.title;
    (<HTMLInputElement>document.getElementById("newAuthor")).value = book.author;
    (<HTMLInputElement>document.getElementById("newDesc")).value = book.desc;
    (<HTMLInputElement>document.getElementById("newPrice")).value = book.price;
    (<HTMLInputElement>document.getElementById("newCategory")).value = book.category;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateBook() {
  if (!this.currentEditId) return;

  // 1. Get the new values from the inputs
  const title = (<HTMLInputElement>document.getElementById("newBook")).value;
  const author = (<HTMLInputElement>document.getElementById("newAuthor")).value;
  const desc = (<HTMLInputElement>document.getElementById("newDesc")).value;
  const price = (<HTMLInputElement>document.getElementById("newPrice")).value;
  const category = (<HTMLInputElement>document.getElementById("newCategory")).value;

  // 2. Backup the old list in case the server fails
  const backupBooks = [...this.books];

  // 3. INSTANT UPDATE: Find the book in our local array and change it right now
  this.books = this.books.map((b: any) => {
    if (b.id === this.currentEditId) {
      return { ...b, title, author, desc, price, category };
    }
    return b;
  });

  // 4. Clear the UI state immediately
  const editId = this.currentEditId; // Save a copy for the API call
  this.cancelEdit();

  // 5. Background Sync
  const formData = new FormData();
  formData.append("id", editId);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("description", desc); // Matches req.body.description in index.js
  formData.append("price", price);
  formData.append("category", category);

  this.http.put(this.APIUrl + 'UpdateBook', formData).subscribe({
    next: () => {
      // Server confirmed! Refresh in background to ensure everything is perfect
      this.refreshBooks();
    },
    error: (err) => {
      // If server failed, put the old data back
      this.books = backupBooks;
      alert("Update failed on server. Reverting changes.");
    }
  });
}

  cancelEdit() {
    this.isEditMode = false;
    this.currentEditId = null;
    this.clearForm();
  }

  deleteBook(id: any) {
    const originalBooks = [...this.books];
    this.books = this.books.filter((book: any) => book.id !== id);
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe({
      error: () => {
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

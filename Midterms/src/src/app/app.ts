import { Products } from './products';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_share-data');

public employees: {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
}[] = [];

constructor(
  private _employeeService: Employee,
  private ProductsService: Products
) {}

ngOnInit() {
  this.employees = this._employeeService.getEmployees();
  this.products = this.ProductsService.getProducts();
}

public products: {
    productId: string;
    productName: string;
    description: string;
    price: number;
  }[] = [];
}

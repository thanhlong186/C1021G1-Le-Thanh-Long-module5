import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../model/Product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.products);
  }
  getAll() {
    this.products = this.productService.getAll();
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    console.log("đã xóa dữ liệu");
    this.getAll();
  }

}

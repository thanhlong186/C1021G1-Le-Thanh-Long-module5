import {Component, OnInit} from '@angular/core';
import {Product} from 'src/model/Product';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  product: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.products);
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    console.log('đã xóa dữ liệu');
    this.getAll();
  }

  findById(id: number) {
    this.product = this.productService.findById(id);
    console.log(this.product);

  }


  submitDelete() {
    this.productService.deleteProduct(this.product.id);
    this.ngOnInit();
  }
}

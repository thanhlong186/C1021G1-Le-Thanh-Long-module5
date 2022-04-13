import {Component, OnInit} from '@angular/core';
import {Product} from 'src/model/Product';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {error} from 'protractor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  product: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    // console.log(this.products);
  }

  getAll() {
    // this.products = this.productService.getAll();
    this.productService.getAll().subscribe(data => {
      this.products = data;
      console.log("đã lấy đước dữ liệu");
    }, error => {
      console.log("đã xảy ra lỗi");
    });

  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('đã xóa dữ liệu');
      this.getAll();
    }, error => {
      console.log("có lỗi khi xóa dữ liệu");
    },()=> {
      console.log("Đã xóa thành công");
    });

  }

  findById(id: number) {
    this.productService.findById(id).subscribe( data => {
      this.product = data;
    })
    // this.product = this.productService.findById(id);
    // console.log(this.product);

  }


  submitDelete() {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      console.log("Đã xóa được dữ liệu");
      this.ngOnInit();
    });

  }
}

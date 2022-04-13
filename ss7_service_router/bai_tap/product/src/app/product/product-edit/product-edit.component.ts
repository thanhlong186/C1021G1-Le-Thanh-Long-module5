import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  });
  id: number;
  product: Product;

  constructor(private productService: ProductService,
              private activated: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    // this.id = Number(this.activated.snapshot.paramMap.get('id'));
    // this.product = this.productService.findById(this.id);
    // this.productForm.setValue(this.productService.findById(this.id));
    // console.log(this.productForm.value);
  }


  updateProduct() {
    // console.log("djaskjdklj");
    this.productService.updateProduct(this.id, this.productForm.value);
    console.log("đã Update dữ liệu");
    this.router.navigateByUrl('');
  }

}

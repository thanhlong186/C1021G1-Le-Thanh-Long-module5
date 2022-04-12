import { Injectable } from '@angular/core';
import {Product} from '../model/Product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  constructor() { }

  getAll() {
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  }
  editProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  findById(id: number) {
    for (let item of this.products){
      if (item.id === id) {
        return item;
      }
    }
    // return this.products.find(product => product.id === id);
  }
  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
  updateProduct(id: number, data: Product){
    console.log(133);
    // for (let product of this.products) {
    //   if (product.id == id){
    //     this.products.splice(product.id, 0, data);
    //   }
    // }
    // console.log(this.products);
  }
}

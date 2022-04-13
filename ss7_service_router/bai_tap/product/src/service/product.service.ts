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
    for (let i in this.products) {
      if(this.products[i].id == id) {
        this.products.splice(+i, 1)
        console.log(this.products);
      }
    }
  }
  updateProduct(idProduct: number, data: Product){
    console.log(data);
    // console.log(133);
    for (let i in this.products) {
      if(this.products[i].id == idProduct) {
        this.products[i]= data;
        console.log(this.products);
      }
    }

  }
  getInfo
}

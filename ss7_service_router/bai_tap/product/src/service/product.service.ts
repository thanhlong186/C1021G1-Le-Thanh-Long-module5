import { Injectable } from '@angular/core';
import {Product} from '../model/Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly URL_PRODUCT = 'http://localhost:3000/Product';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.URL_PRODUCT);
    // return this.products;
  }
  saveProduct(product) {
    return this.http.post<Product>(this.URL_PRODUCT, product);
    // return this.products.push(product);
  }
  updateProduct(id: number, data: Product) {
    return this.http.put(this.URL_PRODUCT + '/' + id, data)
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id === id) {
    //     this.products[i] = product;
    //   }
    // }
  }

  findById(id: number) {
    return this.http.get(`${this.URL_PRODUCT}/` + id);
    // for (let item of this.products){
    //   if (item.id === id) {
    //     return item;
    //   }
    // }
    // return this.products.find(product => product.id === id);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.URL_PRODUCT}/` + id);
    // for (let i in this.products) {
    //   if(this.products[i].id == id) {
    //     this.products.splice(+i, 1)
    //     console.log(this.products);
    //   }
    // }
  }

  // updateProduct(idProduct: number, data: Product){
    // console.log(data);
    // // console.log(133);
    // for (let i in this.products) {
    //   if(this.products[i].id == idProduct) {
    //     this.products[i]= data;
    //     console.log(this.products);
    //   }
    // }

  // }

}

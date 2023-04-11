import { Injectable } from '@angular/core';
import { IProduct } from '../interface/Shares';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private products: IProduct[] = [
    { ID: 1, Name: "Blue Dress", Quantity: 10, Price: 100, Img: "assets/img/game.png", Isdiscount: true , discount:0 },
    { ID: 2, Name: "Brown Top", Quantity: 5, Price: 50, Img: "assets/img/safe.png" , Isdiscount: true , discount:0},
    { ID: 3, Name: "Green Pants", Quantity: 2, Price: 200, Img: "assets/img/circus.png", Isdiscount: true , discount:0 }
  ];
  constructor() { }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(prdId: number): IProduct | null {
    if (!isNaN(prdId)) {
      var product = this.products.find(p => p.ID === prdId);
      return product ? product : null;
    }
    return null;
  }


  GetProductsWithDiscount(){
    var Productswithdiscount:IProduct[]=[]
     for(let product of this.products){
       if(product.Isdiscount==true){
         Productswithdiscount.push(product);
       }
     }
     return Productswithdiscount;
   }
 
   GetProductsWithoutDiscount(){
     var Productswithoutdiscount:IProduct[]=[]
      for(let product of this.products){
        if(product.Isdiscount==false){
         Productswithoutdiscount.push(product);
        }
      }
      return Productswithoutdiscount;
    }
 
   showproducts:boolean=true;
   GetProductById(prdId:number){
     for(let product of this.products){
       if(product.ID==prdId){
         return product;
       }
     }
     return null;
   }

  

}

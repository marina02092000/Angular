import { Component,ViewChild  } from '@angular/core';
import { IProduct } from '../interface/Shares';
import { ICategory } from '../interface/Shares';
import { DiscountOffers } from '../interface/Shares';
import { ChildComponent } from '../child/child.component';
import {ProductServiceService} from '../services/product-service.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo:string;
  ProductList: IProduct[] = [];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
  isdiscount:boolean ;
  textId:string="myid"

  selectedname:any

  // src: string='assets/img/Capture1.PNG';

  // togglePurchase(): void {
  //   this.IsPurchased = !this.IsPurchased;
  // }

  
  constructor(public productservice:ProductServiceService,private activatedRoute:ActivatedRoute,private router:Router){
    this.Discount = DiscountOffers['NoDiscount'];
    this.StoreName = "Dress";
    this.StoreLogo = 'assets/img/cabin.png';
    // this.ProductList = [
    //   {ID:1, Name: "Product A",Quantity:1, Price: 10, Img:"assets/img/game.png"},
    //   {ID:2, Name: "Product B",Quantity:2, Price: 20, Img:"assets/img/cake.png"},
    //   {ID:3, Name: "Product C",Quantity:1, Price: 30, Img:"assets/img/submarine.png"}
    // ];
    this.CategoryList = [
      {ID:1 ,Name: "Category 1" },
      {ID:2, Name: "Category 2" },
      {ID:3, Name: "Category 3" }
    ];
    
    this.ClientName ="marina isaq ";
    this.IsPurchased = true;
  
    this.isdiscount = this.checkRole()

  }



  renderValues(){
    this.ProductList=this.productservice.getAllProducts();
    this.productservice.showproducts=!this.productservice.showproducts;

}

checkRole():boolean{
   if(this.Discount===DiscountOffers.NoDiscount){
       return false
   }else{
    return true
   }
   
}

Buyproduct()
  {
    this.IsPurchased=false
  }

ProductListfromchild:IProduct[]=[]
showproducts(listpro:IProduct[]){

  this.ProductListfromchild=listpro;
}

@ViewChild(ChildComponent) child!: ChildComponent;

ngAfterViewInit() {
  //this.child.sayWelcome();
}

WithDiscount()
{
  this.router.navigate(["withdiscount"],{relativeTo:this.activatedRoute});
}
WithoutDiscount()
{
  this.router.navigate(["withoutdiscount"],{relativeTo:this.activatedRoute});
}


  
}


export interface IProduct {
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    Img: string;
    Isdiscount:boolean;
    discount:number;
}

export interface ICategory {
    ID: number;
    Name: string;
}
  
export enum DiscountOffers {
    NoDiscount = "No Discount",
    TenPercent = "10%",
    FifteenPercent = "15%",
}
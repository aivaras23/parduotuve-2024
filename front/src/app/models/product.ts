export interface Product {
   id?:number;
   name:string;
   price:number;
}

/*
class Product {
    public id?:number;
    public name:string;
    public price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    public getPriceWithVat(){
        return this.price * 1.21;
    }
}
*/
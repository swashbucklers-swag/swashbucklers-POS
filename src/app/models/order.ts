import { Customer } from "../customers/customer/customer";
import { Item } from "./item";
import { Location } from './location';

export class Order {
    orderId: number;
    customer: Customer
    location: Location;
    dateOfOrder: Date;
    statusHistory: [{
        historyId: number;
        orderStatus: string;
        statusTime: Date;
    }];
    orderDetails:[{
        orderDetailsId:number;
        order: Order;
        item: Item;
        quantity:number;
    }];
}

export class CreateOrder {
    customerId: number;
    location: Location;
    statusHistory: [{
        orderStatus: string;
    }];
    orderDetailsDTOSet:[{
        itemId: number;
        quantity:number;
    }];
}

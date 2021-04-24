import { Inventory } from "./Inventory";

export class Item {
    itemId: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    inventory: Inventory;
}

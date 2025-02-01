import { MenuItem } from "./restaurantType";

export interface CartItem extends MenuItem {
    quantity: number;
}

export type CartState = {
    cart: CartItem[];
    addToCart : (item : MenuItem) => void;
    clearToCart : () => void;
    removeFromTheCart : (id: string) => void;
    incrementQuantity : (id:string) => void;
    decrementQuantity : (id:string) => void;
}
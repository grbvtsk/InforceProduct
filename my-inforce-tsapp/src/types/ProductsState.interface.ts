import {Product} from "./Product.interface.ts";
export interface ProductsState {
    products: Product[];
    loading: boolean;
}

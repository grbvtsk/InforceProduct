import { setProducts, setLoading} from "../store/productsSlice.ts";
import {AppDispatch} from "../store";


export const fetchProducts = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        dispatch(setProducts(data));
    } catch (error: any) {
        console.log(error)
    } finally {
        dispatch(setLoading(false));
    }
};

export const addProduct = (product: {
    name: string;
    count: number;
    weight: string;
    width: number;
    height: number;
})=> async (dispatch: AppDispatch)=>{
    dispatch(setLoading(true));
    try {
        const response = await fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error('Failed to add product');
        }

        const newProduct = await response.json();

        const productsResponse = await fetch('http://localhost:5000/api/products');
        const updatedProducts = await productsResponse.json();

        dispatch(setProducts(updatedProducts));
    } catch (error: any) {
        console.error('Error adding product:', error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const deleteProduct = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete product');
        }

        const productsResponse = await fetch('http://localhost:5000/api/products');
        const updatedProducts = await productsResponse.json();

        dispatch(setProducts(updatedProducts));
    } catch (error: any) {
        console.error('Error deleting product:', error);
    } finally {
        dispatch(setLoading(false));
    }
};


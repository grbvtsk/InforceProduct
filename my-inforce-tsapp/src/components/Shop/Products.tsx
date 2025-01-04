import classes from "./Products.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from "react";
import {fetchProducts} from "../../services/productService.ts";
import {AppDispatch, RootState} from "../../store";
import ProductItem from "./ProductItem.tsx";

const Products = () => {
    const dispatch: AppDispatch = useDispatch();

    const { products, loading } = useSelector((state: RootState) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p className={classes.products} >Loading...</p>;

    return (
        <section className={classes.products}>
            <h2>Your favorite products</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </ul>
        </section>
    );
};

export default Products;

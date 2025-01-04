import {ChangeEvent, FormEvent, useState} from "react";
import classes from "./AddProduct.module.css"
import {addProduct} from "../../services/productService.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {Product} from "../../types/Product.interface.ts";

const AddProduct = () => {

    const dispatch: AppDispatch = useDispatch();


    const [product, setProduct] = useState<Product>({
        name: '',
        count: 0,
        weight: '',
        width: 0,
        height: 0,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: name === 'count' || name === 'width' || name === 'height' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to add this product?')){
            if (!product.name || !product.height || !product.width || !product.count || !product.weight){
                alert("All inputs are require")
            }else {
                dispatch(addProduct(product));
                setProduct({name: '', count: 0, weight: '', width: 0, height: 0});
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <h2>Add Product</h2>
            <div className={classes.inputGroup}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={classes.inputGroup}>
                <label htmlFor="count">Count:</label>
                <input
                    type="number"
                    min="0"
                    id="count"
                    name="count"
                    value={product.count}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={classes.inputGroup}>
                <label htmlFor="weight">Weight:</label>
                <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={product.weight}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={classes.inputGroup}>
                <label htmlFor="width">Width:</label>
                <input
                    type="number"
                    min="0"
                    id="width"
                    name="width"
                    value={product.width}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={classes.inputGroup}>
                <label htmlFor="height">Height:</label>
                <input
                    type="number"
                    min="0"
                    id="height"
                    name="height"
                    value={product.height}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className={classes.button}>Add Product</button>
        </form>
    );
};

export default AddProduct;

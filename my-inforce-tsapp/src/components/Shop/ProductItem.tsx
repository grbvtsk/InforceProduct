import classes from "./ProductItem.module.css"
import {deleteProduct} from "../../services/productService.ts"
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
const ProductItem = ({product}) => {

    const dispatch: AppDispatch = useDispatch();
    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <li>
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
            <p>Weight: {product.weight}</p>
            <p>Width: {product.width}</p>
            <p>Height: {product.height}</p>
            <button className={classes.deleteButton} onClick={() => handleDelete(product.id)}>
                Delete
            </button>
        </li>
    );
};

export default ProductItem;

import React, {useContext} from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({id, name, price, description}) => {
    const ctx = useContext(CartContext);
    const addHandler = (amount) => ctx.addMeal({id: id, name: name, price: price, amount: amount});
    const priceStr = `$${price.toFixed(2)}`;
    return(
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{priceStr}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addHandler}/>
            </div>
        </li>
    )
}

export default MealItem
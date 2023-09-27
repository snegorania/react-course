import React, {useContext} from "react";
import styles from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";

const Cart = ({onCloseCart}) => {
    const ctx = useContext(CartContext);
    const cartItems = <ul className={styles['cart-items']}>{ctx.meals.map((item) => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}/>)}</ul>
    return <Modal onClose={onCloseCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>ctx.totalAmount</span>
        </div>
        <div className={styles.actions}>
            <button classname={styles['button--alt']} onClick={onCloseCart}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;
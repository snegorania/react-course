import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addToCart(props.item));
  }

  const handleRemoveClick = () => {
    dispatch(removeFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveClick}>-</button>
          <button onClick={handleAddClick}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
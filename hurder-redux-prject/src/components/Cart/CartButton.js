import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/uiSlice';

const CartButton = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCart());
  }

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
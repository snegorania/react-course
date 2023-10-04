import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./CheckoutForm.js/CheckoutForm";

const Cart = ({ onCloseCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const ctx = useContext(CartContext);

  const handleAdd = (id) => {
    ctx.addMeal({ ...ctx.meals.find((el) => el.id === id), amount: 1 });
  };

  const handleRemove = (id) => {
    ctx.deleteMeal(id);
  };

  const submitHandler = async (userData) => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: userData,
            order: ctx.meals,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Try to order later");
      }

      const data = await response.json();
      setLoading(false);
      setIsSubmited(true);
      setMessage(`Your order is saved with id: ${data.name}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.meals.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={handleAdd.bind(null, item.id)}
          onRemove={handleRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const actions = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={onCloseCart}>
        Close
      </button>
      <button onClick={() => setIsCheckout(true)} className={styles.button}>
        Order
      </button>
    </div>
  );

  const totalAmount = `${ctx.totalAmount.toFixed(2)}$`;

  const cartContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? (
        <Checkout onCancel={onCloseCart} onSubmit={submitHandler} />
      ) : (
        actions
      )}
    </React.Fragment>
  );

  const handleSubmitClose = () => {
    setIsSubmited(false);
    setMessage('');
    ctx.clearCart();
    onCloseCart();
  }

  return (
    <Modal onClose={onCloseCart}>
      {!isLoading && !isSubmited && !error && cartContent}
      {isLoading && <p>Loading...</p>}
      {isSubmited && (
        <React.Fragment>
          <p>{message}</p>
          <button className={styles["button-alt"]} onClick={handleSubmitClose}>
            Close
          </button>
        </React.Fragment>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Modal>
  );
};

export default Cart;

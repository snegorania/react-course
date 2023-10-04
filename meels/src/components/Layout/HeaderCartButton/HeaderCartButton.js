import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from "@mui/material";

const HeaderCartButton = ({ onClick }) => {
  const [btnHilightet, setbtnHilighted] = useState(false)
  const ctx = useContext(CartContext);

  const { meals } = ctx;
  useEffect(()=>{
    if(meals.length === 0) {
      return;
    }
    setbtnHilighted(true);
    const timeout = setTimeout(() => {
      setbtnHilighted(false);
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [meals])
  const amount = meals.reduce((sum, el) => sum + el.amount, 0);

  const btnClasses = `${styles.button} ${btnHilightet && styles.bump}`;

  return (
    <Button className={btnClasses} onClick={onClick}>
      <ShoppingCartIcon className={styles.icon}/>
      <Typography component='span' variant="p">Your Cart</Typography>
      <Typography component='span' variant="p" className={styles.badge}>{amount}</Typography>
    </Button>
  );
};

export default HeaderCartButton;

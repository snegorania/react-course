import React, {useContext} from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../store/cart-context';
import { Typography } from '@mui/material';
import { ListItem } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

const MealItem = ({id, name, price, description}) => {
    const ctx = useContext(CartContext);
    const addHandler = (amount) => ctx.addMeal({id: id, name: name, price: price, amount: amount});
    const priceStr = `$${price.toFixed(2)}`;
    return(
        <StyledEngineProvider injectFirst>
            <ListItem alignItems='flex-start' className={styles.meal}>
            <div>
                <Typography component="h3" variant='h3'>{name}</Typography>
                <Typography variant='description' component='div'>{description}</Typography>
                <div className={styles.price}>{priceStr}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addHandler}/>
            </div>
        </ListItem>
        </StyledEngineProvider>
    )
}

export default MealItem
import { createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./uiSlice";

const initialState = {
    items: [],
    totalAmount: 0,
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action) {
            state.changed = true;
            state.totalAmount++;
            const currentItem = action.payload;
            const existingItem = state.items.find(el => el.id === currentItem.id);
            if (!existingItem) {
                state.items.push({
                    id: currentItem.id,
                    title: currentItem.title,
                    price: currentItem.price,
                    quantity: 1,
                    total: currentItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.total = existingItem.total + currentItem.price;
            }
        },
        removeFromCart(state, action) {
            state.changed = true;
            state.totalAmount--;
            const id = action.payload;
            const existingItem = state.items.find(el => el.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(el => el.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.total = existingItem.total - existingItem.price;
            }
        },
        setCart (state, action) {
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount;
        }
    }
})

export default cartSlice;

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export const fetchCartData = () => {
    return async(dispatch) => {
        dispatch(setNotification({
            status: 'sending',
            title: 'Sending',
            message: 'Sending card'
        }));

        const fetchData = async() => {
            const response = await fetch('https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/cart.json');
            if ( !response.ok ) {
                throw new Error('Something went wrong');
            }

            const data = response.json();
            return data;
        }

        try {
            const data = await fetchData();
            dispatch(setCart({items: data.items || [], totalAmount: data.totalAmount || 0}));   
            dispatch(setNotification({
                status: 'success',
                title: 'Success',
                message: 'Send card data Successively'
            }));
        } catch (error) {
            dispatch(setNotification({
                status: 'error',
                title: 'Error',
                message: error.message
            }));
        }

    }
}

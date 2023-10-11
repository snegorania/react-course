import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setNotification } from './store/uiSlice';
import { fetchCartData } from './store/cartSlice';

let isInitial = true;

function App() {
  const isShowCart = useSelector(state => state.ui.isShowCart);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {

    if ( isInitial ) {
      isInitial = false;
      return;
    }

    const fetchCard = async() => {
      dispatch(setNotification({
        status: 'sending',
        title: 'Sending',
        message: 'Sending card'
      }));

      const response = await fetch('https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items, totalAmount: cart.totalAmount})
      })

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      dispatch(setNotification({
        status: 'success',
        title: 'Success',
        message: 'Send card data Successively'
      }));

    }

    if ( cart.changed ) {
      fetchCard().catch(error => {
        dispatch(setNotification({
          status: 'error',
          title: 'Error',
          message: error.message
        }));
      });
    }
    
  }, [cart, dispatch])

  return (
    <Layout>
      {isShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

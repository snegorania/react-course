import { initStore } from "./store";

const initialState = {
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
    ]
  };

export const configureStore = () => {
    const useActions = {
        TOGGLE_FAV: (currState, productId) => {
            const prodIndex = currState.products.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !currState.products[prodIndex].isFavorite;
              const updatedProducts = [...currState.products];
              updatedProducts[prodIndex] = {
                ...currState.products[prodIndex],
                isFavorite: newFavStatus
              };
              return {
                ...currState,
                products: updatedProducts
              };
        }
    }

    initStore(useActions, initialState);
}
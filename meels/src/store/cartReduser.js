function cartReduser(state, action) {
    if (action.type === "ADD_MEAL") {
        const updatedtotalAmount = state.totalAmount + action.payload.amount * action.payload.price;
        const index = state.meals.findIndex(el => el.id === action.payload.id);
        const existingMeal = state.meals[index];
        let updatedMeals;
        if (existingMeal) {
            const updatedMeal = {
                ...existingMeal,
                amount: existingMeal.amount + action.payload.amount
            }
            updatedMeals = [...state.meals];
            updatedMeals[index] = updatedMeal;

        } else {
            updatedMeals = state.meals.concat(action.payload);
        }
        return {meals: updatedMeals, totalAmount: updatedtotalAmount}
    }

    if (action.type === "DELETE_MEAL") {
        const index = state.meals.findIndex(el => el.id === action.payload);
        const existingMeal = state.meals[index];
        const updatedtotalAmount = state.totalAmount - existingMeal.price;
        let updatedMeals;
        if(existingMeal.amount === 1) {
            updatedMeals = state.meals.filter(el => el.id !== action.payload);
        } else {
            const updatedMeal = {
                ...existingMeal,
                amount: existingMeal.amount - 1
            }
            updatedMeals = [...state.meals];
            updatedMeals[index] = updatedMeal; 
        }
        return {meals: updatedMeals, totalAmount: updatedtotalAmount}  
    }

    return {meals: [], totalAmount: 0}
}

export default cartReduser;
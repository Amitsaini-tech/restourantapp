
export const actiontype ={
    SET_USER : 'SET_USER',
    SET_FOOD_ITEMS : 'SET_FOOD_USERS',
    SET_CART_SHOW : 'SET_CART_SHOW',
    SET_CART_ITEMS : 'SET_CART_ITEMS'
};
const reducer = (state,action) => {
    // console.log(action);

    switch(action.type){
        case actiontype.SET_USER:
            return{
                ...state,
                user: action.user,
            };
            case actiontype.SET_FOOD_ITEMS:
            return{
                ...state,
                foodItems: action.foodItems,
            };
            case actiontype. SET_CART_SHOW:
            return{
                ...state,
                cartShow: action.cartShow,
            };
            case actiontype. SET_CART_ITEMS:
            return{
                ...state,
                cartItems: action.cartItems,
            };
            default:
                return state;
    }
};
export default reducer;
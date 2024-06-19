import { fetchCart, fetchUser } from "../utils/FetchLocalstorage"

const userInfo = fetchUser()
const CartInfo = fetchCart()

export const initialState ={
    user: userInfo,
    foodItems: null,
    cartShow : false,
    cartItems : CartInfo

}
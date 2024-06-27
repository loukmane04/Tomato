import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const  StoreContext = createContext(null)


const StoreContextProvider = (props) => {

const [cartItem , setCartItem] = useState({});

const addToCart = (itemId) => {
  if(!cartItem[itemId]){ //if the product is not in cart 
    setCartItem((prev) =>({...prev,[itemId]:1})) //add product
  }
  else{
    setCartItem((prev) =>({...prev,[itemId]:prev[itemId]+1})) //if the product is already in cart add the product + the prev prod
  }

}

const removeFromCart=(itemId) =>{
  setCartItem((prev) =>({...prev,[itemId]:prev[itemId]-1})) 
}

useEffect(()=> {

  console.log(cartItem);
  
}),[cartItem]

    const contextValue = {

      food_list,
      cartItem,
      setCartItem,
      addToCart,
      removeFromCart

    }
    
    return(

    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>



    )
}

export default StoreContextProvider;
import { useContext } from "react";
import { CartContext} from "../context/cart";

//custom hook
export const useCart = () => {
    const context = useContext(CartContext);
    
    if(context === undefined){
        throw new Error("Use cart must be within a cart provider");
    }
    return context;
}
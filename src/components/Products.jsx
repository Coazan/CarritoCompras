import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 9).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <div>
                <button 
                style={{backgroundColor: isProductInCart ? 'red' : 'green'}}
                onClick={() => {isProductInCart ? removeFromCart(product) : addToCart(product) }}>
                  {
                    isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                  }
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

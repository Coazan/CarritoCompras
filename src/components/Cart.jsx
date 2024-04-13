import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price} x {quantity}
      </div>

      <footer>
        <button onClick={addToCart}> + </button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  let quantity = 0;
  let total = 0;

  for (const item of cart) {
    quantity += item.quantity;
    total += item.price * item.quantity;
  }

  total = total.toFixed(2);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
        {total > 0 && <span className="cart-quantity">{total}</span>}
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <div>
          <p>Total: ${total}</p>
          <p>Total productos: {quantity}</p>
        </div>

        <button style={{ backgroundColor: "#E36414" }} onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

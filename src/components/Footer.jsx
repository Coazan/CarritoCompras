import { useFilters } from "../hooks/useFilters";
import "./Footer.css";
import { useCart } from "../hooks/useCart";

export function Footer() {
  const { filters } = useFilters();
  const {cart} = useCart();

  return (
    <footer className="footer">
      <h4><span>Alexis Rivas</span></h4>
      <h4>Compre algo :c</h4>
    </footer>
  );
}

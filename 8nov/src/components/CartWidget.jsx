import {FaShoppingCart} from "react-icons/fa";
import "./navbar.css"
function CartWidget() {
  return (
    <div className="carrito">
        <FaShoppingCart size="40px"/>
        <span className="badge">8</span>
    </div>
  )
}

export default CartWidget
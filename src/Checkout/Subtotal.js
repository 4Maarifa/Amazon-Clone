import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getTotalPrice, getTotalItems } from "../Reducer/reducer";

function Subtotal() {
  const [{ basket }, SetBasket] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a small gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      ></CurrencyFormat>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

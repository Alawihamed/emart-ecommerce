import { Fragment } from "react";
import { CardContainer } from "./styleComponenets";
import Title from "../PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { ImBin, ImPlus, ImMinus } from "react-icons/im";
import EmptyCart from "../../assets/empty-cart.png";
import { Link } from "react-router-dom";
// Continue Button
import {
  removeFromCart,
  incrementQuntity,
  decrementQuntity,
  removeAllFromCart,
} from "../../redux/cart";

const Cart = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <Title title="Cart" />
      {cartItems.length === 0 ? (
        <div className="empty">
          <img src={EmptyCart} alt="empty-cart" />
          <h3>Your Cart is Empty</h3>
          <Link to="/">
            <button type="button">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <Fragment>
          <p
            className="remove-all"
            onClick={() => dispatch(removeAllFromCart())}
          >
            Remove All
            <ImBin />
          </p>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((eachItem, index) => (
                  <tr key={eachItem.id}>
                    <td>{index + 1}</td>
                    <td className="image">
                      <img
                        src={eachItem.image}
                        alt={eachItem.name}
                        width="100px"
                        height="80px"
                      />
                    </td>
                    <td>{eachItem.name}</td>
                    <td className="price">${eachItem.price}</td>
                    <td className="quntity">
                      <button
                        type="button"
                        onClick={() => dispatch(incrementQuntity(eachItem.id))}
                      >
                        <ImPlus />
                      </button>
                      {eachItem.quntity}
                      <button
                        type="button"
                        onClick={() => dispatch(decrementQuntity(eachItem.id))}
                      >
                        <ImMinus />
                      </button>
                    </td>
                    <td>
                      <div className="total">
                        <small>${eachItem.quntity * eachItem.price}</small>
                        <ImBin
                          className="remove-button"
                          onClick={() => dispatch(removeFromCart(eachItem))}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="subtotal">
              <p>Subtotal : ${total}</p>
              <p>Shipping : $40</p>
              <p>Total : ${total + 40}</p>
            </div>
            <div className="continer-buttons">
              <Link to="/">
                <button type="button">Continue Shopping</button>
              </Link>
              <button type="button">Process To Checkout</button>
            </div>
          </div>
        </Fragment>
      )}
    </CardContainer>
  );
};
export default Cart;

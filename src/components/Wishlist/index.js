import { Fragment } from "react";
import { WishlistContainer, Containers } from "./styledComponents";
import Title from "../PageTitle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ImBin } from "react-icons/im";
import {
  removeFromWishlist,
  removeAllFromWishlist,
} from "../../redux/wishlist";
import EmptyWishlist from "../../assets/empty-wishlist.webp";

const Wishlist = () => {
  const { count } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <Containers>
      <Title title="Wishlist" />
      {count.length === 0 ? (
        <div className="empty-wishlist">
          <img src={EmptyWishlist} alt="empty-wishlist" />
          <h3>Your Wishlist is Empty</h3>
          <Link to="/">
            <button type="button">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <Fragment>
          <p
            className="remove-all"
            onClick={() => dispatch(removeAllFromWishlist())}
          >
            Remove All
            <ImBin />
          </p>
          {count.map((eachItem) => (
            <WishlistContainer key={eachItem.id}>
              <div className="wishlist-left">
                <img src={eachItem.image} alt={eachItem.name} />
                <p>
                  {eachItem.name}
                  <br />
                  <small>${eachItem.price}</small>
                </p>
              </div>
              <ImBin
                className="close-button"
                onClick={() => dispatch(removeFromWishlist(eachItem))}
              />
            </WishlistContainer>
          ))}
        </Fragment>
      )}
    </Containers>
  );
};
export default Wishlist;

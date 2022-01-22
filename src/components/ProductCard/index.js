import * as React from "react";
import { CardContainer, PModal } from "./styleComponents";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/wishlist";
import { addToCart } from "../../redux/cart";

const ProductCard = ({ menu, activeTabId }) => {
  const [open, setOpen] = React.useState(false);
  const [productModalData, setProductModalData] = React.useState({});
  const dispatch = useDispatch();

  const productModal = (status, id) => {
    setOpen(status);
    setProductModalData(menus.find((eachItem) => eachItem.id === id));
  };

  const menus =
    activeTabId === "All"
      ? menu
      : menu.filter((eachItem) => eachItem.category === activeTabId);
  return (
    <CardContainer>
      {menus.map((eachItem) => (
        <div key={eachItem.id} className="card">
          <div className="pic">
            <img src={eachItem.image} alt={eachItem.name} />
            <ul className="list-function">
              <li onClick={() => dispatch(addToWishlist(eachItem))}>
                <FaHeart />
              </li>
              <li
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: eachItem.id,
                      name: eachItem.name,
                      price: eachItem.price,
                      image: eachItem.image,
                      quntity: 1,
                    })
                  )
                }
              >
                <FaShoppingCart />
              </li>
              <li onClick={() => productModal(true, eachItem.id)}>
                <FaEye />
              </li>
            </ul>
          </div>
          <div className="card-info">
            <p className="name">{eachItem.name}</p>
            <p className="price">${eachItem.price}</p>
          </div>
        </div>
      ))}
      <PModal open={open} onClose={() => setOpen(false)}>
        <div className="modal">
          <MdClose className="close-icon" onClick={() => setOpen(false)} />
          <div className="row">
            <div className="col-6">
              <div className="pic">
                <img src={productModalData.image} alt="product-img" />
              </div>
            </div>
            <div className="col-6">
              <h3 className="name">{productModalData.name}</h3>
              <p className="desc">{productModalData.desc}</p>
              <h6 className="price">${productModalData.price}</h6>
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: productModalData.id,
                      name: productModalData.name,
                      price: productModalData.price,
                      image: productModalData.image,
                      quntity: 1,
                    })
                  )
                }
              >
                Add To Cart
              </button>
              <hr />
              <h4>
                Categories : <p>{productModalData.category}</p>
              </h4>
              <h4>
                Seller : <p>Alawi Alaidaros</p>
              </h4>
            </div>
          </div>
        </div>
      </PModal>
    </CardContainer>
  );
};
export default ProductCard;

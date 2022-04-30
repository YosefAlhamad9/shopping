import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <FlipMove>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>

          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckoutProduct;

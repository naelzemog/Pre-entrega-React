import { Item } from "../item/item.jsx";
import { useCart } from "../../context/CartContext";
import "./itemdetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button
          className="btn bg-primary primary"
          onClick={() => addItem(item)}
        >
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css';

const ItemDetail = ({name, img, description, stock, category, id, price}) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (cantidad) => {
    const objetToAdd = {
      id, name, price
    };
    console.log(objetToAdd);
    console.log('agregue al carrito', cantidad);
    setQuantity(cantidad);
  };
  
  return (
    <div className="item-detail-container">
      <h2>{name}</h2>
      <div className="item-card">
        <img
          src={img}
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">Categoria: {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>
      <div className="item-actions">
        {
          quantity === 0 ? (
            <ItemCount stock={stock} onAdd={handleAdd} />
          ): (
            <Link to='/cart'>Finalizar Compra</Link>
          )
        }
      </div>
    </div>
  );
}

export default ItemDetail;


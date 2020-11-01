import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { useDispatch } from "react-redux";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong>
      <span>{product.price}</span>

      <button onClick={handleAddProductToCart} type="button">
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;

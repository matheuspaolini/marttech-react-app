import { useCallback, useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { AppContext } from 'context/App';
import { AuthContext } from 'context/Auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ id, category, image, price, title  }: I.ProductItemProps) {
  const { insertCartItem, isItemAlreadyOnCart } = useContext(AppContext);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const isOnCart = isItemAlreadyOnCart(id);

  const handleInsertCartItem = useCallback(() => {
    if (!isAuthenticated) return navigate('/auth/login');

    const newCartItem = ({ id, image, price, title, quantity: 1 });

    insertCartItem(newCartItem);
  }, [insertCartItem]);

  return (
    <S.Container>
      <S.Thumb>
        <S.Image draggable={false} src={image} />
      </S.Thumb>

      <S.Title title={title}>{title}</S.Title>

      <S.Category>{category}</S.Category>

      <S.Price>$ {price}</S.Price>

      <S.Button isOnCart={isOnCart} onClick={handleInsertCartItem}>
        {isOnCart ? 'ADDED' : 'ADD TO CART'}
      </S.Button>
    </S.Container>
  );
}

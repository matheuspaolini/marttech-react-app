import { useCallback, useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { AppContext } from 'context/App';

import EmptyCart from './components/EmptyCart';
import CartItem from './components/CartItem';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Cart({  }: I.CartProps) {
  const { isCartOpen, handleCloseCart, cartItemsLength, cartItems, finishOrder } = useContext(AppContext);

  const navigate = useNavigate();

  const handleFinishOrder = useCallback(() => {
    if (!cartItems.length) {
      toast.error('Your cart is currently empty. Please, add some items.');

      return;
    }

    finishOrder();
    navigate('/orders');
    toast.success('Order finished! :)');
  }, [cartItems, finishOrder])

  return (
    <S.Container isCartOpen={isCartOpen}>
      <S.CloseHolder onClick={handleCloseCart} />

      <S.Main isCartOpen={isCartOpen}>
        <S.Flex>
          <S.Title>Your Cart ({cartItemsLength})</S.Title>

          <S.Close onClick={handleCloseCart}>
            Close
          </S.Close>
        </S.Flex>

        <S.Items>
          {!cartItemsLength && <EmptyCart />}

          {cartItems.map(({ id, title, price, image }) => (
            <CartItem key={title + id} id={id} title={title} price={price} image={image} />
          ))}

        </S.Items>

        <S.Finish onClick={handleFinishOrder}>FINISH</S.Finish>
      </S.Main>
    </S.Container>
  );
}

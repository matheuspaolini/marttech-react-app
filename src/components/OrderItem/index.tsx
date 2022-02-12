import * as S from './styles';
import * as I from './interfaces';
import { useCallback, useContext, useState } from 'react';
import { AppContext } from 'context/App';

export default function OrderItem({ order }: I.OrderItemProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleToggleDetails = useCallback(
    () => setIsDetailsOpen((previous) => !previous), []
  );

  const totalPrice = order.cartItems
    .reduce((accumulator, item) => (item.price * item.quantity) + accumulator, 0)
    .toFixed(2);

  return (
    <S.Container>
      <S.Main>
        <S.Wrapper>
          <S.Field strong>#{new Date(order.createdAt).getTime()}</S.Field>
          <S.Field>{order.account.city}</S.Field>
        </S.Wrapper>

        <S.Wrapper style={{ width: '12rem' }}>
          <S.Field>{order.account.username}</S.Field>
          <S.Field>{order.account.cpf}</S.Field>
          <S.Field>{order.account.email}</S.Field>
        </S.Wrapper>


        <S.Field style={{ width: '3.5rem' }}>$ {totalPrice}</S.Field>

        <S.Button onClick={handleToggleDetails}>
          {isDetailsOpen ? '- Details' : '+ Details'}
        </S.Button>
      </S.Main>

      <S.Details isOpen={isDetailsOpen}>
        {order.cartItems.map(({ id, title, price, quantity }) => 
          <S.Flex key={title + price + id}>
            <S.ItemName title={title}>{title}</S.ItemName> - <S.Info>$ {price} x {quantity} = $ {price * quantity}</S.Info>
          </S.Flex>
        )}
      </S.Details>
    </S.Container>
  );
}

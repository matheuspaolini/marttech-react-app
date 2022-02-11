import { useContext, useState } from 'react';

import Header from 'components/Header';
import OrderItem from 'components/OrderItem';

import { AppContext } from 'context/App';

import { v4 } from 'uuid';

import * as S from './styles';

export default function Orders() {
  const { orders } = useContext(AppContext);
  
  const [searchValue, setSearchValue] = useState('');
  const searchValueInLowerCase = searchValue.toLowerCase();

  return (
    <>
      <Header />

      <S.Container>
        <S.Main>
          <S.Title>Orders</S.Title>

          <S.Search 
            type="text"
            placeholder="Search by Name, CPF, City... "
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <S.List>
            {orders.map((order) => {
              const values: string[] = ([
                order.account.username,
                order.account.cpf,
                order.account.city,
              ]);

              const valuesInLowerCase = values.map((value) => value.toLowerCase());

              if (!searchValue) return <OrderItem key={v4()} order={order} />;

              const hasSearchMatch = valuesInLowerCase.some(
                (value) => value.includes(searchValueInLowerCase)
              );

              return hasSearchMatch && <OrderItem key={v4()} order={order} />;
            })}
          </S.List>
        </S.Main>
      </S.Container>
    </>
  );
}

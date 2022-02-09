import { useState } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import Header from 'components/Header';

import products from '__mock__/products.json';

import ProductItem from 'components/ProductItem';
import { BsClockHistory } from 'react-icons/bs';

export default function Home({  }: I.HomeProps) {
  const [showMore, setShowMore] = useState(false);

  const firstTenProducts = products.slice(0, 10);

  const currentProducts = showMore ? products : firstTenProducts;

  return (
    <>
      <Header />

      <S.Container>
        <S.Main>
          <S.Rectangle>
            <S.InnerText>Buy Everything!</S.InnerText>

            <S.InnerText removeBold fontSize="2.5rem">
              <BsClockHistory />
              At any time!
            </S.InnerText>
          </S.Rectangle>

          <S.Section>
            <S.Title>ALL PRODUCTS</S.Title>

            <S.List>
              {currentProducts.map(({ id, title, price, image, category }) =>
                <ProductItem
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  category={category}
                />)}
            </S.List>

            {showMore ? (
              <S.ToggleList onClick={() => setShowMore(false)}>
                Collapse
              </S.ToggleList>
            ) : (
              <S.ToggleList onClick={() => setShowMore(true)}>
                Expand
              </S.ToggleList>
            )}
          </S.Section>
        </S.Main>
      </S.Container>
    </>
  );
}

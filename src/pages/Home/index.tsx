import { useState } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import Header from 'components/Header';

import banner from 'assets/banner.svg';

import products from '__mock__/products.json';

import ProductItem from 'components/ProductItem';

export default function Home({  }: I.HomeProps) {
  const [showMore, setShowMore] = useState(false);

  const firstTenProducts = products.slice(0, 10);

  const currentProducts = showMore ? products : firstTenProducts;

  return (
    <>
      <Header />

      <S.Container>
        <S.Main>
          <S.BannerSection>
            <S.Banner src={banner} draggable={false} />
          </S.BannerSection>

          <S.Section>
            <S.Title>ALL PRODUCTS</S.Title>

            <S.List>
              {currentProducts.map(({ id, title, price, image, category }) =>
                <ProductItem
                  key={title}
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

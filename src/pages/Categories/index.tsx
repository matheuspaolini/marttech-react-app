import Header from 'components/Header';

import * as S from './styles';
import * as I from './interfaces';

import { useLocation } from 'react-router-dom';

import categories from '__mock__/categories.json';
import products from '__mock__/products.json';

import ProductItem from 'components/ProductItem';

export default function Categories() {
  const location = useLocation();

  const firstCategoryFromEnum = categories.at(0);
  const { category } = location?.state as I.LocationState ?? '';

  const currentCategory = category ?? firstCategoryFromEnum;

  const productsByCategory = products.filter(
    (product) => product.category === currentCategory
  );

  return (
    <>
      <Header />

      <S.Container>
        <S.Main>
          <S.Section>
            <S.Title>{currentCategory}</S.Title>

            <S.List>
              {productsByCategory.map(({ id, title, category, image, price }) => 
                <ProductItem
                  key={title}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  category={category}
                />)}
            </S.List>
          </S.Section>
        </S.Main>
      </S.Container>
    </>
  );
}

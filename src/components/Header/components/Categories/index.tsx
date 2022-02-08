import * as S from './styles';
import * as I from './interfaces';

import categories from '__mock__/categories.json';
import { useState } from 'react';
import { useCallback } from 'react';

export default function Categories({  }: I.CategoriesProps) {
  const categoriesLength = categories.length;

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleOnMouseOver = useCallback(() => setIsMouseOver(true), []);
  const handleOnMouseLeave = useCallback(() => setIsMouseOver(false), []);

  return (
    <S.Container onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <S.Title>Categories</S.Title>

      <S.List length={categoriesLength} isOpen={isMouseOver}>
        {categories.map((category) => <S.Item key={category}>{category}</S.Item>)}
      </S.List>
    </S.Container>
  );
}

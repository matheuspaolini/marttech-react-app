import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import * as I from './interfaces';

import categories from '__mock__/categories.json';

export default function Categories({  }: I.CategoriesProps) {
  const categoriesLength = categories.length;

  const navigate = useNavigate();

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleOnMouseOver = useCallback(() => setIsMouseOver(true), []);
  const handleOnMouseLeave = useCallback(() => setIsMouseOver(false), []);

  const handleNavigate = useCallback((category: string) => {
    navigate('/categories', { state: { category } });
  }, []);

  return (
    <S.Container onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <S.Title>Categories</S.Title>

      <S.List length={categoriesLength} isOpen={isMouseOver}>
        {categories.map((category) =>
          <S.Item
            key={category}
            onClick={() => handleNavigate(category)}
          >
            {category}
          </S.Item>)}
      </S.List>
    </S.Container>
  );
}

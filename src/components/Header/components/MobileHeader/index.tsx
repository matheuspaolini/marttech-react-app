import * as S from './styles';
import * as I from './interfaces';

import Logo from 'components/Logo';
import User from '../User';

import categories from '__mock__/categories.json';

import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function MobileHeader({  }: I.MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  const bodyElement = document.body;
  
  return (
    <>
      <S.Container>
        <S.Main>
          <S.Menu onClick={handleOpenMenu}>
            <BiMenuAltLeft size="2.5rem" />
          </S.Menu>

          <Logo />
        </S.Main>
      </S.Container>

      {createPortal(
        <S.List isOpen={isMenuOpen}>
          <User />
  
          <S.Anchor>Home</S.Anchor>
  
          {categories.map((category) => <S.Anchor key={category}>{category}</S.Anchor>)}
  
          <S.Anchor>Contact</S.Anchor>
  
          <S.Close onClick={handleCloseMenu}>
            <AiOutlineCloseCircle size={32} />
          </S.Close>
        </S.List>,
        bodyElement
      )}
    </>
  );
}

import * as S from './styles';
import * as I from './interfaces';

import Logo from 'components/Logo';
import User from '../User';

import categories from '__mock__/categories.json';

import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'context/Auth';
import AuthMenu from '../AuthMenu';

export default function MobileHeader({  }: I.MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  const bodyElement = document.body;

  const navigate = useNavigate();

  const handleNavigate = useCallback((category: string) => {
    navigate('/categories', { state: { category } });
    setIsMenuOpen(false);
  }, []);
  
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
          {isAuthenticated ? <User /> : <AuthMenu />}
  
          <S.Anchor to="/">Home</S.Anchor>
  
          {categories.map((category) =>
            <S.CategoryAnchor
              key={category}
              onClick={() => handleNavigate(category)}
            >
              {category}
            </S.CategoryAnchor>)}
  
          <S.Anchor to="/contact">Contact</S.Anchor>
          <S.Anchor to="/orders">Orders</S.Anchor>
  
          <S.Close onClick={handleCloseMenu}>
            <AiOutlineCloseCircle size={32} />
          </S.Close>
        </S.List>,
        bodyElement
      )}
    </>
  );
}

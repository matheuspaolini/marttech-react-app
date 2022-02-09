import * as S from './styles';
import * as I from './interfaces';

import { FiMinus } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs'

export default function Quantity({  }: I.QuantityProps) {
  return (
    <S.Container>
      <S.Button>
        <FiMinus size="1.25rem" />
      </S.Button>

      <S.Value>12</S.Value>

      <S.Button>
        <BsPlusLg size="0.75rem" />
      </S.Button>
    </S.Container>
  );
}

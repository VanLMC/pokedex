import React from 'react';

// Utils
import { getColorByType } from '../../util/colors';

// Styles
import * as S from './styles';

export default function Card({ data }) {
  return (
    <S.Container>

      <div className="picture-container">
        <S.Picture src={data.img} />
        <div className="tile" />
        <S.Id>{`#${(`00${data.id}`).slice(-3)}`}</S.Id>
      </div>

      <S.Name>{data.name}</S.Name>
      <S.TypeContainer>
        {data.type.map((t, index) => (
          <S.TypeIndicator key={index} isFirst={index === 0} colors={getColorByType(t)}>
            <p>{t}</p>
          </S.TypeIndicator>
        ))}
      </S.TypeContainer>
    </S.Container>
  );
}

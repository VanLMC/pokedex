import React from 'react';
// Components
import SearchBar from '../search-bar';
// Styles
import * as S from './styles';

export default function Header() {
  return (
    <>
      <S.WhiteRow>
        <S.Title>Pokédex</S.Title>
      </S.WhiteRow>
      <S.DarkRow>
        <S.Content>
          <S.SeachDescription>
            Name or Number
          </S.SeachDescription>
          <SearchBar />
        </S.Content>
      </S.DarkRow>
    </>
  );
}

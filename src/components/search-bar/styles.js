import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:  10px 0;
`;
export const SeachDescription = styled.p`
    color: #fff;
    font-size: 2rem;
`;

export const SearchBarInput = styled.input`
    background-color: #fff;
    height: 35px;
    width: 200px;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;
export const SearchBarButton = styled.button`
    background-color: #EE6B2F;
    border: none;
    outline: none;
    height: 35px;
    width: 50px;
    border-radius: 5px;
    margin-left: 10px;
`;

export const SearchIcon = styled(IoIosSearch)`
    color: #fff;
    font-size: 25px;
`;

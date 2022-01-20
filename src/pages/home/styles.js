import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    grid-gap: 20px;

    @media only screen and (max-width: 85rem){
        grid-template-columns: auto auto auto;
    }
    @media only screen and (max-width: 65rem){
        grid-template-columns: auto auto;
    }
    @media only screen and (max-width: 45rem){
        grid-template-columns: auto;   
    }
    
    margin-top: 40px;
`;

export const GridItem = styled.div`
    text-align: center;
`;

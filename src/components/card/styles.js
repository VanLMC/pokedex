import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 22rem;
    align-items: center;

    @media only screen and (max-width: 30rem){
        width: auto;
    }

    .picture-container {
        position: relative;
        margin: 0;
        padding: 0;
        transition: transform .2s; 
        
        .tile{
            height: 1.2rem;
            width: 12rem;
            background-color: #fff;
            position: absolute;
            border-top-right-radius: 10px;
            left: 0;
            bottom: 0rem;
            
        }
    }
    .picture-container:hover {
        transform: scale(1.3);
     }
`;

export const Picture = styled.img`
    width: 19rem;
    height: 19rem;
    background-color: #F2F2F2;
    padding: 40px;
`;

export const Id = styled.p`
    font-size: 1.2rem;
    font-weight: 600;       
    margin-right: auto;
    color: #8A8A8A;
    position: absolute;
    bottom: -0.5rem;
    left: 1rem;
`;

export const Name = styled.p`
    font-size: 2rem;
    color: black;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: auto;

`;
export const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 60px;
    align-items: flex-start;
`;
export const TypeIndicator = styled.div`
    padding: 2px;
    border-radius: 5px;
    width: 100px;
    margin-top: 10px;
    ${({ isFirst }) => !isFirst
        && css`
         margin-left: 5px;
        `}

    ${({ colors }) => css`
         background-color: ${colors.background};
         color: ${colors.text};
        `}
`;

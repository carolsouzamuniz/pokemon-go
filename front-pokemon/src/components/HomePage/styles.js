import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-top: 14vh;
    padding-left: 8px;
`
export const PokemonCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    gap: 12px;
    justify-content: space-between;
`
export const CardContainer = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 12px;
    width: 150px;
    height: 150px;
    align-self: center;
    justify-self: center;

    img{
        max-width: 80px;
        max-height: 80px;
    }
`
 
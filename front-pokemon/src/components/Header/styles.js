import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  background: black;
  text-align: right;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 12vh;
  margin: auto;

  img{
      max-height: 12vh;
      width: auto;
  }
`

export const TitleContainer = styled.div`
    text-align: left;
    grid-column: 1/2;
    padding-left: 24px;
`

export const LinkContainer = styled.div`
    text-align: right;
    justify-content: center;
    grid-column: 2/3;
    padding-right: 32px;
    justify-self: center;
    align-self: center;

    a {
        text-decoration: none;
        color: white;
        border-radius: 8px;
        padding: 4px 12px;
        background-color: #2c318c;
        
    }
`

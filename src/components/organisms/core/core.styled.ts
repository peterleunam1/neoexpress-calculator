import styled from '@emotion/styled'

export const CoreStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 0.8rem;
  background-color: red;

  @media (max-width: 500px) {
    width: 91.5%;
    position: absolute;
    top: 28%;
    z-index: 2;
    background-color: #fff;
    border-radius: .9375rem;
    height: calc(70vh - 1.25rem);
    justify-content: flex-start;
    padding: 1.25rem;
  }
`
export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
  }
  
  p {
    font-size: 0.88rem;
  }
`

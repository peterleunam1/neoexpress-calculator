import styled from '@emotion/styled'

export const AsideStyled = styled.aside`
  height: 100%;
  width: 28%;
  border-radius: 0.625rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  @media (max-width: 500px) {
    width: 100%;
    height: 32vh;
    justify-content: center;
    border-radius: 0;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  strong{
    width: 100%;
    margin-bottom: 10px;
    @media (max-width: 500px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
  }
`

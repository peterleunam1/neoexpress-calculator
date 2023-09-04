import styled from '@emotion/styled'

const LEFT: string = 'left'
const SIDES = {
  left: 'flex-start',
  right: 'flex-end'
}

export const ListItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.8rem;
  font-size: 14px;

  @media (max-width: 500px) {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
    width: 50%;
  }

`
export const ItemContent = styled.div<{ align: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align !== LEFT ? SIDES.right : SIDES.left};
  gap: 5px;
  width: 100%;
  font-size: ${({ align }) => align !== LEFT && '12px'};
  margin-bottom: ${({ align }) => align === LEFT && '0.5rem'};

  @media (max-width: 500px) {
    font-size: 17px;
  }
`

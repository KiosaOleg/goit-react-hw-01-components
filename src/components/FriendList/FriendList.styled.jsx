import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 5px;
  box-shadow: 0px 0px 3px 1px gray;
  transition: all 250ms;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 4px 2px gray;
  }
`;

export const Status = styled.span`
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  background-color: ${p => (p.stat ? 'green' : 'red')};
`;

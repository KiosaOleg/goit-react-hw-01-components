import styled from '@emotion/styled';

export const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 30px 0;

  width: 300px;
  background-color: white;
  border: 2px solid gray;
  border-radius: 15px;
  box-shadow: 5px 3px 5px black;

  text-align: center;

  p {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    border-top: 1px solid black;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    background-color: ${p => p.theme.accent};
    li:last-child {
      border-right: none;
    }
    li {
      width: 100px;
      border-right: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-size: 15px;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 100px;
  border: 2px solid black;
  border-radius: 50%;
  margin: 30px auto;
`;

import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  padding: 0;
  color: black;
  background: white;

  @media (prefers-color-scheme: dark) {
    background: black;
    color: white;
  }
`;

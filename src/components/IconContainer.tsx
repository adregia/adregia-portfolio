import styled from '@emotion/styled';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1px;
  margin-top: 10px;
  flex-wrap: wrap;

  & > * {
    flex-basis: 20%;
  }
`;

import Image from 'next/image';
import styled from '@emotion/styled';

export const DarkModeInvertedImage = styled(Image)`
  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

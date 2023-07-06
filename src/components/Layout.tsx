import { Card as CardBase } from '@mui/joy';
import styled from '@emotion/styled';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 375px;
  overflow-x: scroll;
  padding: 0;
  color: white;
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #833ab4,
    #fd1d1d,
    #fcb045
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Card = styled(CardBase)`
  border-radius: 0px;
  width: 100%;
  max-width: 384px;
  max-height: 768px;
  display: flex;
  flex: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.9);
  backdropfilter: blur(10px);

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: none;
    display: flex;
    flex: 1;
  }

  @media only screen and (orientation: landscape) {
    width: 100%;
  }
`;

const HoleCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.9);
`;

export interface LayoutProps {
  children: React.ReactNode;
  isHomePage?: boolean;
}

export function Layout({ children, isHomePage = false }: LayoutProps) {
  return <Main>{isHomePage ? <HoleCard>{children}</HoleCard> : <Card>{children}</Card>}</Main>;
}

export default Layout;

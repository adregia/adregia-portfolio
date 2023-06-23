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
  padding: 0 0.5rem;
  color: white;
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #833ab4,
    #fd1d1d,
    #fcb045
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;

const Card = styled(CardBase)`
  border-radius: 30px;
  width: 628px;
  height: 527px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex: 1;
    border-radius: 0;
  }
`;

const HoleCard = styled(Card)`
  background: radial-gradient(300px circle at 110px 110px, transparent 23%, rgba(0, 0, 0, 0.25) 25%, white 25%);
`;

export interface LayoutProps {
  children: React.ReactNode;
  isHomePage?: boolean;
}

export function Layout({ children, isHomePage = false }: LayoutProps) {
  return <Main>{isHomePage ? <HoleCard>{children}</HoleCard> : <Card>{children}</Card>}</Main>;
}

export default Layout;

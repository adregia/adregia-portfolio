import styled from '@emotion/styled';
import Image from 'next/image';

const FooterBase = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  margin-bottom: 15px;
  gap: 9px;
`;

export function Footer() {
  return (
    <FooterBase>
      <Image priority src="/resources/react.svg" height={32} width={32} alt="React" />
      <Image priority src="/resources/python.svg" height={32} width={32} alt="Python" />
      <Image priority src="/resources/js.svg" height={32} width={32} alt="JavaScript" />
      <Image priority src="/resources/aws.svg" height={32} width={32} alt="AWS" />
    </FooterBase>
  );
}

export default Footer;

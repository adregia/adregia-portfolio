import Image from 'next/image';
import styled from '@emotion/styled';
import { IconButton } from '@mui/joy';
import Link from 'next/link';

const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: transparent;
  font-size: 48px;
  font-weight: 400;
  background: -webkit-linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #833ab4,
    #fd1d1d,
    #fcb045
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  margin-top: 10px;
`;

const _ContactSection = styled.section`
  margin-top: 38px;
  margin-left: 19px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 10px;
  margin-top: 19px;
  height: auto;
`;

export default function ContactSection() {
  return (
    <_ContactSection>
      <Initials>AD</Initials>
      <IconContainer>
        <Link href="https://www.linkedin.com/in/ahmed-dregia/" target="_blank">
          <IconButton variant="plain" color="neutral" size="sm">
            <Image priority src="/resources/icons/linkedin.svg" height={20} width={20} alt="LinkedIn" />
          </IconButton>
        </Link>
        <IconButton variant="plain" color="neutral" size="sm">
          <Image priority src="/resources/icons/email.svg" height={20} width={20} alt="Email" />
        </IconButton>
        <IconButton variant="plain" color="neutral" size="sm">
          <Image priority src="/resources/icons/document.svg" height={20} width={20} alt="Resumé" />
        </IconButton>
        <IconButton variant="plain" color="neutral" size="sm">
          <Image priority src="/resources/icons/phone.svg" height={20} width={20} alt="Phone" />
        </IconButton>
      </IconContainer>
    </_ContactSection>
  );
}

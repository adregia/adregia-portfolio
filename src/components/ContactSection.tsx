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
  color: white;
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

  @media only screen and (orientation: portrait) and (max-width: 900px) {
    margin-top: 19px;
    height: auto;
  }

  @media only screen and (orientation: landscape) and (max-width: 900px) {
    margin-top: 19px;
    height: auto;
  }
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

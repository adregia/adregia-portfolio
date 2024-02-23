import Head from 'next/head';
import Link from 'next/link';
import IconButton from '@mui/joy/IconButton';

import { DarkModeInvertedImage, Main, Initials, IconContainer, Wave } from '@/components';

const STATIC_LINKS = [
  {
    name: 'Email',
    url: 'mailto:ahmeddregia@gmail.com',
    icon: '/resources/icons/email.svg',
  },
  {
    name: 'Resumé',
    url: 'https://drive.google.com/file/d/1VT0niA4MLEKhv_z_r5kZkVZVNg1U9FsU/view?usp=sharing',
    icon: '/resources/icons/document.svg',
  },
  {
    name: 'Phone',
    url: 'tel:+1-949-648-6227',
    icon: '/resources/icons/phone.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ahmed-dregia',
    icon: '/resources/icons/linkedin.svg',
  },
  {
    name: 'Hoist',
    url: 'https://www.hoist.news/',
    icon: '/resources/icons/hoist.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/adregia',
    icon: '/resources/icons/instagram.svg',
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/adregia',
    icon: '/resources/icons/github.svg',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Dregia</title>
        <meta name="description" content="Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Initials>AD</Initials>
        <IconContainer>
          {STATIC_LINKS.map((link) => (
            <Link key={link.name} href={link.url} target="_blank">
              <IconButton variant="plain" color="neutral" size="sm" name={link.name}>
                <DarkModeInvertedImage priority src={link.icon} height={20} width={20} alt={link.name} />
              </IconButton>
            </Link>
          ))}
        </IconContainer>
        <Wave />
      </Main>
    </>
  );
}

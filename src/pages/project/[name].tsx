import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { IoIosArrowBack as BackIcon } from 'react-icons/io';

import Layout from '@/components/Layout';
import { Thumbnail } from '@/components/Thumbnail';

interface ProjectData {
  title: string;
  description: string;
  images: string[];
}

const STATIC_PROJECT_DATA: { [projectName: string]: ProjectData } = {
  'fit-recruiters': {
    title: 'FitRecruiters (Personal Project)',
    description: 'Jobs Website for Fitness Professionals (Web, Firebase)',
    images: [
      '/resources/images/fit-recruiters/1.png',
      '/resources/images/fit-recruiters/2.png',
      '/resources/images/fit-recruiters/3.png',
      '/resources/images/fit-recruiters/4.png',
    ],
  },
  'hoist-powertools': {
    title: 'Hoist Powertools (Personal Project)',
    description: 'Utilities and Resources for Powerlifters (iOS, Firebase)',
    images: [
      '/resources/images/hoist-powertools/1.png',
      '/resources/images/hoist-powertools/2.png',
      '/resources/images/hoist-powertools/3.png',
      '/resources/images/hoist-powertools/4.png',
    ],
  },
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export function Project() {
  const { asPath } = useRouter();
  const project = STATIC_PROJECT_DATA[asPath.split('/')[2]];

  return (
    <Layout>
      <Header>
        <Link href="/">
          <IconButton variant="plain" color="neutral" size="sm">
            <BackIcon />
          </IconButton>
        </Link>
        <Typography level="h1" fontSize="xl" fontWeight="md">
          {project.title}
        </Typography>
      </Header>
      <div style={{ margin: 10 }}>
        <Typography>{project.description}</Typography>
        <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {project.images.map((image) => (
            <Thumbnail key={image} src={image} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Project;

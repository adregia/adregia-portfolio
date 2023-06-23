import Link from 'next/link';
import styled from '@emotion/styled';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { IoIosArrowBack as BackIcon } from 'react-icons/io';

import Layout from '@/components/Layout';
import { Thumbnail } from '@/components/Thumbnail';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export function Project() {
  return (
    <Layout>
      <Header>
        <Link href="/">
          <IconButton variant="plain" color="neutral" size="sm">
            <BackIcon />
          </IconButton>
        </Link>
        <Typography level="h1" fontSize="xl" fontWeight="md">
          FitRecruiters (Personal Project)
        </Typography>
      </Header>
      <div style={{ margin: 10 }}>
        <Typography>
          A job board and recruiting website for fitness professionals, designed to upsell a recruiting service.
        </Typography>
        <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </Layout>
  );
}

export default Project;

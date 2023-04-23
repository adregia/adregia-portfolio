import styled from '@emotion/styled';
import { IconButton } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  link?: string;
}

const ListItemContainer = styled.div`
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  color: #000000;
`;

const Subtitle = styled.span`
  font-size: 12px;
  color: #676767;
  margin-bottom: 6px;
`;

const ListItem = ({ title, subtitle = '', link = '' }: ListItemProps) => {
  const isExternalLink = !link.startsWith('/');
  const imageSrc = isExternalLink ? '/resources/icons/link.svg' : '/resources/icons/info.svg';
  const imageAlt = isExternalLink ? 'Link' : 'Info';

  return (
    <ListItemContainer>
      <Content>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
        {link && (
          <Link href={link} target="_blank">
            <IconButton variant="plain" size="sm" color="neutral">
              <Image priority src={imageSrc} width={16} height={16} alt={imageAlt} />
            </IconButton>
          </Link>
        )}
      </Content>
    </ListItemContainer>
  );
};

export default ListItem;

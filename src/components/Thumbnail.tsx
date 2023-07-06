import { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import IconButton from '@mui/joy/IconButton';
import Modal from '@mui/joy/Modal';
import Card from '@mui/joy/Card';
import { IoIosClose as CloseIcon } from 'react-icons/io';

const ThumbnailBase = styled.div`
  position: relative;
  height: 125px;
  width: 125px;
  border-radius: 20px;
  transition: transform 0.2s;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    z-index: 1;
  }
`;

const ImageContainer = styled.div`
  background: lightgrey;
  position: relative;
  display: flex;
  flex: 1;
  margin-top: 10px;
  border-radius: 10px;
`;

export function Thumbnail({ src = '/resources/images/placeholder.webp' }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        data-testid="modal"
      >
        <Card sx={{ position: 'relative', height: '50vh', width: '50vw', display: 'flex', flexDirection: 'column' }}>
          <div>
            <IconButton onClick={handleClose} color="neutral" size="sm" sx={{ zIndex: 1 }}>
              <CloseIcon />
            </IconButton>
          </div>
          <ImageContainer>
            <Image style={{ objectFit: 'contain' }} fill src={src} alt="FitRecruiters" />
          </ImageContainer>
        </Card>
      </Modal>
      <ThumbnailBase data-testid="thumbnail" onClick={() => setOpen(true)}>
        <Image style={{ objectFit: 'cover' }} fill src={src} alt="FitRecruiters" />
      </ThumbnailBase>
    </>
  );
}

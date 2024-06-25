import styled from 'styled-components';
import bgImage from '@/assets/footer_background.png';
import SaveButton from './Button/SaveButton';

interface FooterProps {
  'data-image': {
    src: string;
  };
}

function Footer() {
  return (
    <StyledFooter data-image={bgImage}>
      <SaveButton />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer<FooterProps>`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  width: 1080px;
  height: 200px;
  background-image: url(${(props) => props['data-image'].src});
  background-repeat: no-repeat;
  background-size: 1080px auto;
`;

export default Footer;

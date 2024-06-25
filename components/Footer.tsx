import styled from 'styled-components';
import bgImage from '@/assets/footer_background.png';

interface FooterProps {
  'data-image': {
    src: string;
  };
}

function Footer() {
  return <StyledFooter data-image={bgImage}></StyledFooter>;
}

const StyledFooter = styled.footer<FooterProps>`
  width: 1080px;
  height: 200px;
  background-image: url(${(props) => props['data-image'].src});
  background-repeat: no-repeat;
  background-size: 1080px auto;
`;

export default Footer;

import Image from 'next/image';
import styled from 'styled-components';
import bgImage from '@/assets/background.png';

function Footer() {
  return (
    <StyledFooter>
      <Image className="background" src={bgImage} alt="메이플 배경 이미지" />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  .background {
    width: 100%;
    height: 570px;
  }
`;

export default Footer;

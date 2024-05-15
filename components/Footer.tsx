import Image from 'next/image';
import styled from 'styled-components';
import bgImage from '@/assets/footer_background.png';

function Footer() {
  return (
    <StyledFooter>
      <Image className="bg" src={bgImage} alt="메이플 배경 이미지" priority={true} />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  .bg {
    width: 100%;
    height: 200px;
  }
`;

export default Footer;

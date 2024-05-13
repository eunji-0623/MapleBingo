import Image from 'next/image';
import styled from 'styled-components';
import charImage from '@/assets/character.png';
import logoImage from '@/assets/logo.png';

function Header() {
  return (
    <StyledHeader>
      <Image className="char" src={charImage} alt="메이플 캐릭터" />
      <Image className="logo" src={logoImage} alt="로고 이미지" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  gap: 80px;
  background-color: #24b5ff;
  padding: 30px 80px;

  .char {
    width: 165px;
    height: 246px;
  }

  .logo {
    width: 670px;
    height: 200px;
    margin-top: 30px;
  }
`;

export default Header;

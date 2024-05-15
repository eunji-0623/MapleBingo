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
  justify-content: center;
  gap: 80px;
  background-color: #24b5ff;
  padding: 10px 80px;

  .char {
    width: 123px;
    height: 184px;
  }

  .logo {
    width: 570px;
    height: 160px;
    margin-top: 10px;
  }
`;

export default Header;

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
  gap: 50px;
  background-color: #24b5ff;

  .char {
    width: 220px;
    height: 328px;
    margin-left: 40px;
  }

  .logo {
    width: 770px;
    height: 250px;
    margin-top: 30px;
  }
`;

export default Header;

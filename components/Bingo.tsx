import styled from 'styled-components';
import bgImage from '@/assets/main_background.png';
import Square from './Square';

function Bingo() {
  const handleClick = () => {};

  return (
    <BingoWrapper data-image={bgImage}>
      <div>
        <Square value="1" onSquareClick={handleClick} />
        <Square value="2" onSquareClick={handleClick} />
        <Square value="3" onSquareClick={handleClick} />
        <Square value="4" onSquareClick={handleClick} />
        <Square value="5" onSquareClick={handleClick} />
      </div>
      <div>
        <Square value="1" onSquareClick={handleClick} />
        <Square value="2" onSquareClick={handleClick} />
        <Square value="3" onSquareClick={handleClick} />
        <Square value="4" onSquareClick={handleClick} />
        <Square value="5" onSquareClick={handleClick} />
      </div>
      <div>
        <Square value="1" onSquareClick={handleClick} />
        <Square value="2" onSquareClick={handleClick} />
        <Square value="3" onSquareClick={handleClick} />
        <Square value="4" onSquareClick={handleClick} />
        <Square value="5" onSquareClick={handleClick} />
      </div>
      <div>
        <Square value="1" onSquareClick={handleClick} />
        <Square value="2" onSquareClick={handleClick} />
        <Square value="3" onSquareClick={handleClick} />
        <Square value="4" onSquareClick={handleClick} />
        <Square value="5" onSquareClick={handleClick} />
      </div>
      <div>
        <Square value="1" onSquareClick={handleClick} />
        <Square value="2" onSquareClick={handleClick} />
        <Square value="3" onSquareClick={handleClick} />
        <Square value="4" onSquareClick={handleClick} />
        <Square value="5" onSquareClick={handleClick} />
      </div>
    </BingoWrapper>
  );
}

interface BingoWrapperProps {
  'data-image': {
    src: string;
  };
}

const BingoWrapper = styled.div<BingoWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background-color: #24b5ff;
  background-image: url(${(props) => props['data-image'].src});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 1080px auto;
`;

export default Bingo;

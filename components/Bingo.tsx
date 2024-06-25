import styled from 'styled-components';
import { useState } from 'react';
import bgImage from '@/assets/main_background.png';
import Square from './Square';

function Bingo() {
  const [isSelect, setIsSelect] = useState(Array(25).fill(false));

  const handleClick = (idx: number) => {
    const nextSquares = isSelect.slice();
    nextSquares[idx] = !nextSquares[idx];
    setIsSelect(nextSquares);
  };

  return (
    <BingoWrapper data-image={bgImage}>
      {Array.from({ length: 5 }, (_, rowIndex) => (
        <div key={rowIndex}>
          {Array.from({ length: 5 }, (_, colIndex) => {
            const idx = rowIndex * 5 + colIndex;
            return <Square key={idx} idx={idx} value={`${colIndex + 1}`} onSquareClick={handleClick} isSelect={isSelect[idx]} />;
          })}
        </div>
      ))}
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

import Image from 'next/image';
import styled from 'styled-components';
import mushImage from '@/assets/mush.png';

type Props = {
  idx: number;
  value: string;
  onSquareClick: (idx: number) => void;
  isSelect: boolean;
};

function Square({ idx, value, onSquareClick, isSelect }: Props) {
  const handleClick = () => {
    onSquareClick(idx);
  };

  return (
    <SquareButton onClick={handleClick}>
      {value}
      {isSelect && <Image className="selected" src={mushImage} alt="주황버섯 이미지" />}
    </SquareButton>
  );
}

const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  background: white;
  border: 1px solid black;
  user-select: none; /* 텍스트 선택 방지 */
  -webkit-user-drag: none; /* 웹킷 기반 브라우저에서 드래그 방지 */
  user-drag: none; /* 드래그 방지 */
  cursor: pointer;

  .selected {
    position: absolute;
    width: 80px;
    height: 80px;
    transform: translate(-45px, -35px);
    opacity: 20%;
  }

  &:hover {
    background-color: #eee;
  }
`;

export default Square;

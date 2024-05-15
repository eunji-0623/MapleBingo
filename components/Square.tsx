import styled from 'styled-components';

type Props = {
  value: string;
  onSquareClick: any;
};

function Square({ value, onSquareClick }: Props) {
  return <SquareButton onClick={onSquareClick}>{value}</SquareButton>;
}

const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  background: white;
  border: 1px solid black;
`;

export default Square;

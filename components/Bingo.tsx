import styled from 'styled-components';
import Square from './Square';

function Bingo() {
  const handleClick = () => {};

  return (
    <div>
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
    </div>
  );
}

export default Bingo;

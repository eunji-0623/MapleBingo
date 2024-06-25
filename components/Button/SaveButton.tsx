import styled from 'styled-components';

function SaveButton() {
  return <StyledButton>저장하기</StyledButton>;
}

const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  background-color: #4477dd;
  border: 4px solid #fff;
  color: #fff;
  outline: none;
`;

export default SaveButton;

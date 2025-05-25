import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import palette from 'lib/styles/palette';

const ToggleWrapper = styled.button<{ mode?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.bgColor};
  border: ${({ theme }) => theme.borderColor};
  font-size: 1.5rem;

  ${props =>
    props.mode
      ? 'box-shadow: 0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
      : 'box-shadow: 0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'}
`;

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle}>
      {mode ? <MdAdd color={`${palette.cyan[5]}`} /> : <MdAdd />}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

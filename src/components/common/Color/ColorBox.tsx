import { useContext } from 'react';
import ColorContext from 'utils/colorContext';

function ColorBox() {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
}

export default ColorBox;
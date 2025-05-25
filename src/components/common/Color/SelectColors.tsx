import { useContext } from 'react';
import ColorContext from 'utils/colorContext';

function SelectColors() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  const { actions } = useContext(ColorContext);

  const handleSetColor = (color) => {
    actions.setColor(color);
  };

  const handleSetSubcolor = (color) => {
    actions.setSubcolor(color);
  };

  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex' }}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background: color,
              width: '32px',
              height: '32px',
            }}
            onClick={() => handleSetColor(color)}
            onContextMenu={e => {
              e.preventDefault();
              handleSetSubcolor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectColors;
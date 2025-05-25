import { createContext, useState } from 'react';

// const ColorContext = createContext({ color: 'red' });

const ColorContext = createContext({
  state: {
    color: 'red',
    subcolor: 'gray',
  },
  actions: {
    setColor: undefined,
    setSubcolor: undefined,
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('red');
  const [subcolor, setSubcolor] = useState('gray');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };

export default ColorContext;
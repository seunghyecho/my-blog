import { DefaultTheme } from 'styled-components';

export const sizes = {
  desktop: 1024,
  tablet: 768,
};

export const media = (key: keyof typeof sizes) => {
  return (style: any) =>
    `@media (max-width: ${sizes[key] / 16}em) { ${style} }`;
};

/**
 * 다크모드 스타일 세팅
 */

export const lightTheme: DefaultTheme ={
  bgColor:'#fefefe',
  textColor:'#202124',
  buttonColor:'#e3e1e3',
  buttonHoverColor:'#908790',
  borderColor:'1px solid #e9ecef',
}

export const darkTheme: DefaultTheme ={
  bgColor:'#202124',
  textColor:'#fefefe',
  buttonColor:'#403c40',
  buttonHoverColor:'#908790',
  borderColor:'1px solid #2c2d33',
}

export const theme = {
  lightTheme,
  darkTheme
}
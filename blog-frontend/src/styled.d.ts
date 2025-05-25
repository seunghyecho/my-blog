import { Dispatch, SetStateAction } from 'react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    buttonColor: string;
    buttonHoverColor: string;
    borderColor: string;
  }
}

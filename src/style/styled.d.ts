import 'styled-components'
declare module 'styled-components'{
  export interface DefaultTheme{
    title: string;
  
  colors: {
    white: string;
    veryPaleBlue: string;
    lightGrayishBlue:string;
    darkGrayishBlue:string;
    veryDarkBlue:string;
  }
  }
}
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      veryPaleBlue: string;
      lightGrayishBlue: string;
      darkGrayishBlue: string;
      veryDarkBlue: string;

      bg: string;
      topBg: string;
      cardBg: string;
      textPrimary: string;
      textSecondary: string;
      toggle: string;
    };
  }

}

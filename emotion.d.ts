import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    themeName: string;
    colors: {
      background: string;
      text: string;
      accent: string;
    };
  }
}

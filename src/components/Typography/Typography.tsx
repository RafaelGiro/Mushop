import { TextProps } from "react-native";
import styled, { css } from "@emotion/native";
import {
  useFonts,
  Merriweather_900Black,
  Merriweather_700Bold,
  Merriweather_400Regular,
} from "@expo-google-fonts/merriweather";

import { variants } from "./helpers";

interface TypographyProps extends TextProps {
  variant: "title-1" | "title-2" | "title-3" | "body-1" | "label" | "header";
  accent?: boolean;
}

const BaseTypography = styled.Text<TypographyProps>`
  ${({ variant, accent, theme }) => css`
    font-family: ${variants[variant].fontFamily};
    font-size: ${variants[variant].fontSize};
    letter-spacing: ${variants[variant].letterSpacing};
    color: ${accent ? theme.colors.accent : theme.colors.text};
  `}
`;

export const Typography = (props: TypographyProps) => {
  const [fontLoaded] = useFonts({
    Merriweather_900Black,
    Merriweather_700Bold,
    Merriweather_400Regular,
  });

  if (!fontLoaded) return null;

  return <BaseTypography {...props} />;
};

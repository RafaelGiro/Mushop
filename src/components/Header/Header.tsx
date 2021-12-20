import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@emotion/react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Typography } from "../Typography";
import { ThemeContext } from "../../contexts/Theme";

import { BackButton, ChangeTheme, Container, EmptyBack } from "./styles";
import { Logo } from "../Logo";

type HeaderProps = NativeStackNavigationProp<RootStackParamList, "Home">;
interface ComponentProps {
  hideBackButton?: boolean;
}

export const Header = (props: ComponentProps) => {
  const { hideBackButton } = props;
  const navigation = useNavigation<HeaderProps>();
  const { setIsDark } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Container>
      {!hideBackButton ? (
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={24}
            color={theme.colors.text}
          />
        </BackButton>
      ) : (
        <EmptyBack>
          <Logo width={20} height={24} />
        </EmptyBack>
      )}
      <Typography variant="header" style={{ letterSpacing: 4 }}>
        MUSHOP
      </Typography>
      <ChangeTheme onPress={() => setIsDark((curr) => !curr)}>
        <Feather
          name={theme.themeName === "dark" ? "moon" : "sun"}
          size={24}
          color={theme.colors.text}
          style={{ marginRight: 4 }}
        />
      </ChangeTheme>
    </Container>
  );
};

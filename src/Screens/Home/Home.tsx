import { useContext, useMemo } from "react";
import { ImageSourcePropType, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useTheme } from "@emotion/react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import TopImageLight from "../../../assets/home/home-top-image-light.jpg";
import TopImageDark from "../../../assets/home/home-top-image-dark.jpg";
import BottomImageLight from "../../../assets/home/home-bottom-image-light.jpg";
import BottomImageDark from "../../../assets/home/home-bottom-image-dark.jpg";

import { Logo } from "../../components/Logo";
import { Typography } from "../../components/Typography";
import { ThemeContext } from "../../contexts/Theme";

import {
  Actions,
  BottomImage,
  ChangeTheme,
  Container,
  GoToMenu,
  InnerContainer,
  TopImage,
} from "./styles";

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<HomeScreenProps>();
  const { setIsDark } = useContext(ThemeContext);

  const topImage: Record<string, ImageSourcePropType> = useMemo(
    () => ({
      light: TopImageLight,
      dark: TopImageDark,
    }),
    []
  );

  const bottomImage: Record<string, ImageSourcePropType> = useMemo(
    () => ({
      light: BottomImageLight,
      dark: BottomImageDark,
    }),
    []
  );

  return (
    <Container>
      <TopImage source={topImage[theme.themeName]} />
      <BottomImage source={bottomImage[theme.themeName]} />
      <InnerContainer>
        <View>
          <Logo />
          <Typography variant="title-1">Mushop</Typography>
          <Typography variant="body-1" accent style={{ width: "80%" }}>
            Culinária vegana especializada em cogumelos
          </Typography>
        </View>
        <Actions>
          <GoToMenu onPress={() => navigation.navigate("Menu")}>
            <Ionicons
              name="ios-chevron-forward-sharp"
              size={24}
              color={theme.colors.background}
            />
          </GoToMenu>
          <ChangeTheme onPress={() => setIsDark((curr) => !curr)}>
            <Feather
              name={theme.themeName === "dark" ? "moon" : "sun"}
              size={16}
              color={theme.colors.text}
              style={{ marginRight: 4 }}
            />
            <Typography variant="label" style={{ textTransform: "capitalize" }}>
              {theme.themeName}
            </Typography>
          </ChangeTheme>
        </Actions>
      </InnerContainer>
    </Container>
  );
};

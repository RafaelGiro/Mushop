import { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@emotion/react";

import BurgerLight from "../../../assets/menu/burger-light.png";
import BurgerDark from "../../../assets/menu/burger-dark.png";
import DishLight from "../../../assets/menu/dish-light.png";
import DishDark from "../../../assets/menu/dish-dark.png";
import SaladLight from "../../../assets/menu/salad-light.png";
import SaladDark from "../../../assets/menu/salad-dark.png";

import { Typography } from "../Typography";

import { formatPriceInReais } from "./helpers";
import { Container, ItemImage } from "./styles";

type MenuItemProps = NativeStackNavigationProp<RootStackParamList, "ViewItem">;

export const MenuItem = (props: MenuItem) => {
  const { name, price, type } = props;
  const theme = useTheme();
  const navigation = useNavigation<MenuItemProps>();

  const images: Record<string, any> = useMemo(
    () => ({
      "burger-light": BurgerLight,
      "burger-dark": BurgerDark,
      "dish-light": DishLight,
      "dish-dark": DishDark,
      "salad-light": SaladLight,
      "salad-dark": SaladDark,
    }),
    []
  );

  return (
    /* @ts-ignore */
    <Container onPress={() => navigation.navigate("ViewItem", { ...props })}>
      <ItemImage source={images[`${type}-${theme.themeName}`]} />
      <Typography variant="title-3">{name}</Typography>
      <Typography variant="body-1" accent>
        {formatPriceInReais(price)}
      </Typography>
    </Container>
  );
};

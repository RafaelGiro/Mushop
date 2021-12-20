import { useTheme } from "@emotion/react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { formatPriceInReais } from "../../components/MenuItem/helpers";
import { Typography } from "../../components/Typography";

import {
  Container,
  Detail,
  Details,
  MainContent,
  MainImage,
  NameAndPrice,
} from "./styles";

interface ComponentProps {
  route: { params: MenuItem };
}

export const ViewItemScreen = (props: ComponentProps) => {
  const { name, calories, description, gluten, picture, price, weight } =
    props.route.params;

  const theme = useTheme();
  return (
    <Container>
      <Header />
      <MainContent>
        <MainImage source={{ uri: picture }} />
        <NameAndPrice>
          <Typography variant="title-2" style={{ letterSpacing: 2 }}>
            {name.toUpperCase()}
          </Typography>
          <Typography
            variant="title-2"
            accent
            style={{ fontFamily: "Merriweather_400Regular" }}
          >
            {formatPriceInReais(price)}
          </Typography>
        </NameAndPrice>
        <Typography variant="label">{weight}</Typography>
        <Typography variant="body-1" style={{ marginTop: 24 }}>
          {description}
        </Typography>
        <Details>
          <Detail>
            <MaterialCommunityIcons
              name={gluten ? "leaf" : "leaf-off"}
              size={40}
              color={theme.colors.accent}
            />
            <Typography variant="label">
              {gluten ? "Contém glúten" : "Sem glúten"}
            </Typography>
          </Detail>
          <Detail>
            <MaterialIcons
              name="local-fire-department"
              size={40}
              color={theme.colors.accent}
            />
            <Typography variant="label">{calories} kcal</Typography>
          </Detail>
        </Details>
      </MainContent>
      <Footer />
    </Container>
  );
};

import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../../components/Header";
import { MenuItem } from "../../components/MenuItem";

import { Container, MenuItems } from "./styles";
import { FlatList } from "react-native";

export const MenuScreen = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function getItems() {
      try {
        const res = await axios.get("http://192.168.0.101:3000/items");
        const { data } = res;
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    }

    getItems();
  }, []);

  return (
    <Container>
      <Header hideBackButton />
      <MenuItems>
        <FlatList
          renderItem={({ item }) => <MenuItem {...item} />}
          data={items}
          keyExtractor={(item) => item.name}
          numColumns={2}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </MenuItems>
    </Container>
  );
};

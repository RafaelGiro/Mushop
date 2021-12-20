type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  ViewItem: undefined;
};

interface MenuItem {
  type: "dish" | "burger" | "salad";
  picture: string;
  name: string;
  description: string;
  price: number;
  gluten: boolean;
  calories: number;
  weight: string;
}

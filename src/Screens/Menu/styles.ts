import styled from "@emotion/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const MenuItems = styled.View`
  margin: 0 auto;
`;

import styled from "@emotion/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  position: relative;
`;

export const InnerContainer = styled.View`
  margin: 0 10%;
  padding: 70% 0 8% 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Actions = styled.View`
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

export const GoToMenu = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.text};
  padding: 16px;
  border-radius: 16px;
`;

export const ChangeTheme = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

export const TopImage = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 50%;
`;

export const BottomImage = styled.Image`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 58%;
  height: 37%;
`;

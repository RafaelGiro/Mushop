import styled from "@emotion/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const MainContent = styled.View`
  padding: 0 32px;
`;

export const MainImage = styled.Image`
  border-radius: 8px;
  margin: 24px 0;
  width: 100%;
  height: 33%;
`;

export const NameAndPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
`;

export const Detail = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

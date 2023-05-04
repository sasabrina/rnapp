import React from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};

export default Loading;

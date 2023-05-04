import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { formatTemperature } from "@/utils";
import styled from "styled-components/native";

type SummaryProps = {
  main: string;
  highest: number;
  lowest: number;
};

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

const Summary = ({ main, highest, lowest }: SummaryProps) => {
  return (
    <>
      <Text variant="titleMedium">{main}</Text>
      <Container>
        <Text variant="titleMedium">H:{formatTemperature(highest)}</Text>
        <Text variant="titleMedium">L:{formatTemperature(lowest)}</Text>
      </Container>
    </>
  );
};

export default Summary;

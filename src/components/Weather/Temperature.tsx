import React from "react";
import { Text } from "react-native-paper";
import { formatTemperature } from "@/utils";

type TemperatureProps = {
  temp: number;
  screen?: string;
};

const Temperature = ({ temp, screen }: TemperatureProps) => {
  return (
    <Text
      variant={screen === "city" ? "displaySmall" : "headlineSmall"}
      style={{ marginRight: screen === "city" ? 0 : 20 }}
    >
      {formatTemperature(temp)}
    </Text>
  );
};

export default Temperature;

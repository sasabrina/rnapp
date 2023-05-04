import React from "react";
import { Card, Text, Divider } from "react-native-paper";
import { City } from "@/types";
import { Temperature, WeatherIcon } from "../Weather";

type CityDetailsProps = {
  city: City;
};

const CityDetails = ({ city }: CityDetailsProps) => {
  return (
    <Card mode="contained">
      <Card.Content style={{ alignItems: "center" }}>
        {city.weather && (
          <>
            <Text variant="displayMedium">{city.name}</Text>
            <Temperature temp={city.main.temp} screen="city" />
            <WeatherIcon iconId={city.weather[0].icon} />
            <Divider bold />
            <Text variant="headlineMedium">{city.weather[0]?.main}</Text>
          </>
        )}
      </Card.Content>
    </Card>
  );
};

export default CityDetails;

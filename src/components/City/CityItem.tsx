import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Card, Divider, Text } from "react-native-paper";
import { City, RootStackParamList } from "@/types";
import { formatHours, formatTemperature } from "@/utils";
import { Temperature } from "../Weather";
import Summary from "../Weather/Summary";

type CityItemProps = {
  city: City;
};

const cardStyles = {
  marginBottom: 8,
  backgroundColor: "transparent",
};

const CityItem = ({ city }: CityItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Card mode="contained" style={cardStyles} testID="city-item">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("City", { itemId: city.id, name: city.name })
        }
      >
        <Card.Title
          title={city.name}
          titleVariant="titleLarge"
          subtitle={formatHours(city.dt, city.timezone)}
          right={() => <Temperature temp={city.main.temp} />}
        />
        <Card.Content
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Summary
            main={city.weather[0].main}
            highest={city.main.tempMax}
            lowest={city.main.tempMin}
          />
        </Card.Content>
        <Divider bold />
      </TouchableOpacity>
    </Card>
  );
};

export default CityItem;

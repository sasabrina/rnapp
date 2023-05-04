import React from "react";
import { FlatList, View } from "react-native";
import { Cities } from "@/types";
import CityItem from "./CityItem";

type CitiesListProps = {
  cities: Cities;
};

const CitiesList = ({ cities }: CitiesListProps) => {
  return (
    <View testID="citiesList">
      <FlatList
        data={cities}
        renderItem={({ item }) => <CityItem key={item.id} city={item} />}
      />
    </View>
  );
};

export default CitiesList;

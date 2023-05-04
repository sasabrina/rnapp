import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Text } from "react-native";
import { ScreenView, CitiesList, Loading, SearchCity } from "@/components";
import { GET_CITIES } from "@/queries";
import { CITIES_ID } from "@/utils";
import { Cities, City } from "@/types";

const HomeScreen = () => {
  const [cities, setCities] = useState<Cities>([] as Cities);
  const { loading, error, data } = useQuery(GET_CITIES, {
    variables: { cities_id: CITIES_ID },
  });

  const handleSearch = (city: City) => {
    if (!CITIES_ID.find((id) => id === city.id)) setCities([city, ...cities]);
  };

  useEffect(() => {
    if (!loading && data) {
      setCities(data.cities);
    }
  }, [loading, data]);

  if (loading) return <Loading />;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return (
    <ScreenView>
      <SearchCity onSearch={handleSearch} />
      <CitiesList cities={cities} />
    </ScreenView>
  );
};

export default HomeScreen;

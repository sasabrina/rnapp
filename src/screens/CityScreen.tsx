import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CITY } from "@/queries";
import { CityDetails, Loading, ScreenView } from "@/components";
import { City } from "@/types";
import { cleanSearch } from "@/utils";

const CityScreen = ({ route }) => {
  const { name } = route.params;
  const { loading, error, data } = useQuery(GET_CITY, {
    variables: { city: cleanSearch(name) },
  });
  const [city, setCity] = useState<City>({} as City);

  useEffect(() => {
    if (data) setCity(data.city);
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return <ScreenView>{data && <CityDetails city={city} />}</ScreenView>;
};

export default CityScreen;

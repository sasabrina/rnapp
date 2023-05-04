import { GET_CITY } from "@/queries";
import { City } from "@/types";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

type SearchCityProps = {
  onSearch: (city: City) => void;
};

const searchBarStyles = {
  marginBottom: 12,
  backgroundColor: "transparent",
  borderColor: "gray",
  borderWidth: 1,
};

const SearchCity = ({ onSearch }: SearchCityProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [getCity, { data, loading }] = useLazyQuery(GET_CITY);

  const handleSearch = (value: string) => {
    if (value) {
      getCity({ variables: { city: value } });
      setSearchValue("");
    }
  };

  useEffect(() => {
    if (!loading && data) {
      onSearch(data.city);
    }
  }, [data]);

  return (
    <View>
      <Searchbar
        placeholder="Search for a city..."
        style={searchBarStyles}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        onSubmitEditing={() => handleSearch(searchValue)}
      />
    </View>
  );
};

export default SearchCity;

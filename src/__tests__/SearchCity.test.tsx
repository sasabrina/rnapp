import React from "react";
import { screen, render } from "@testing-library/react-native";
import { CityItem, CitiesList, SearchCity } from "@/components";
import { Cities, City } from "@/types";

const mockCities: Cities = [
  {
    id: "3435910",
    name: "Buenos Aires",
    dt: 1681148114,
    timezone: -10800,
    main: {
      temp: 299.32,
      tempMax: 301.09,
      tempMin: 298.59,
    },
    weather: [
      {
        icon: "04d",
        main: "Clouds",
      },
    ],
  },
];

// test("should render city", () => {
//   const { getByText } = render(<CityItem city={mockCity} />);

//   getByText(mockCity.name);
// });

let component;

describe("<SearchCity />", () => {
  beforeEach(() => {
    const onSearchMock = jest.fn();
    component = render(<SearchCity onSearch={onSearchMock} />);
  });

  it("should render search city", () => {
    expect(component).toBeDefined();
  });
});

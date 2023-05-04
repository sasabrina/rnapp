import { gql } from "@apollo/client";

export const GET_CITIES = gql`
  query getCities($cities_id: [String!]) {
    cities: getCities(id: $cities_id) {
      id
      name
      dt
      timezone
      main {
        temp
        tempMax
        tempMin
      }
      weather {
        icon
        main
      }
    }
  }
`;

export const GET_CITY = gql`
  query getCity($city: String!) {
    city: weatherByCity(city: $city) {
      id
      name
      dt
      timezone
      main {
        temp
        feelsLike
        tempMax
        tempMin
      }
      weather {
        icon
        description
        main
      }
    }
  }
`;

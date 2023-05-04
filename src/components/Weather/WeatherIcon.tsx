import React from "react";
import styled from "styled-components/native";

type WeatherIconProps = {
  iconId: string;
};

const StyledImage = styled.Image`
  width: 150px;
  height: 150px;
`;

const WeatherIcon = ({ iconId }: WeatherIconProps) => {
  const iconSrc = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  return <StyledImage source={{ uri: iconSrc }} />;
};

export default WeatherIcon;

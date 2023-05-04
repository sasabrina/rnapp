// converts temperature from kelvin to celcius
export const kelvinToCelcius = (val: number): number =>
  Math.round(val - 273.15);

// capitalizes the first letter of one or more words
export const capitalize = (input: string, separator: string): string => {
  const capitalizeWord = (word: string) =>
    `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;

  return input.length > 0
    ? input
        .split(separator)
        .map((word) => `${capitalizeWord(word)}`)
        .join(" ")
    : `${capitalizeWord(input)}`;
};

// returns formated temperature to render
export const formatTemperature = (temp: number): string =>
  `${kelvinToCelcius(temp)}°`;

// returns formated hours to render
export const formatHours = (date: number, timezone: number): string =>
  new Date(date * 1000 + timezone * 1000).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const cleanSearch = (value: string) => {
  return !value
    ? ""
    : value
        .toLowerCase()
        .replace(/[àá]/g, "a")
        .replace(/[èé]/g, "e")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u");
};

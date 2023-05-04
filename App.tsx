import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, CityScreen } from "@/screens";
import { RootStackParamList } from "@/types";

const client = new ApolloClient({
  uri: "https://sa-weather-api.herokuapp.com/",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, headerBackVisible: true }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="City" component={CityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

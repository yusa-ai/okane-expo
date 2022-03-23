import Connexion from "./src/pages/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/pages/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="Connexion" component={Connexion} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

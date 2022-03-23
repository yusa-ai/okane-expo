import Dashboard from "../pages/Dashboard";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AuthenticatedTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Accueil"
				component={Dashboard}
				options={{
					tabBarIcon: (
						{ color, size } // TODO focused
					) => <Ionicons name="home" color={color} size={size} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default AuthenticatedTab;

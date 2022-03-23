import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const Connexion = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async (email, password) => {};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Adresse mail"
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="Mot de passe"
				secureTextEntry={true}
				onChangeText={setPassword}
			/>
			<Button
				title="Connexion"
				onPress={() => {
					login(email, password);
				}}
			/>
			<StatusBar style="auto" />
		</View>
	);
};

export default Connexion;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	input: {
		marginVertical: 10,
	},
});

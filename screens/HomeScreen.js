import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title='press me'
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
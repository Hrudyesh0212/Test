import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title='Press for go back'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
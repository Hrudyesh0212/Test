import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
                <Button  
                            title='Press for profile'
                            onPress={() => navigation.navigate("Profile")}
                />
    <View>
        <Text>

            
        </Text>

    </View>
            <Button 
                    title='Press for go back'
                    onPress={() => navigation.goBack()}
                />
        </View>
    );
}
export default DetailsScreen;
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
});
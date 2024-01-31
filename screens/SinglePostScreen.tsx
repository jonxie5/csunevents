import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import HomeScreen from "./HomeScreen";


function PostScreen(props: any) {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{props.route.params.title}</Text>
            </View>
            <Text style={styles.excerpt}>{props.route.params.excerpt}</Text>
            <Pressable 
                    style={styles.button}
                    accessibilityLabel="Go Back" 
                    onPress={() => {
                        props.navigation.navigate('HomeScreen')
                    }}
            >
                 <Text style={styles.buttonText}>Go to Homescreen</Text>
            </Pressable> 
        </View>
    )
}

export default PostScreen;

const styles = StyleSheet.create({
    headingContainer: {
        fontSize: 20,
        borderBottomWidth: 5,
        borderColor: 'red'
    },
    heading: {
        fontSize: 20,
    },
    buttonText: {
        color: 'black'
    },
    button: {
        borderWidth: 2,
        padding: 5
    },
    excerpt: {
        fontSize: 18,
        padding: 5
    },
});
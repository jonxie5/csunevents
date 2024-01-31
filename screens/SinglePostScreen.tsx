import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, SafeAreaView } from "react-native";
import HomeScreen from "./HomeScreen";


function PostScreen(props: any) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return (
        <SafeAreaView>
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading} >{props.route.params.title}</Text>
            </View> 
            <Text style={styles.excerpt}>{props.route.params.excerpt}</Text>
            <TextInput
            onChangeText={onChangeText}
            value={text}
            style={styles.input}
            />
            <Pressable 
                style={styles.button}
                accessibilityLabel="Comment" > 
                <Text style={styles.buttonText}>Comment</Text>
            </Pressable>   
        </View>
        </SafeAreaView>
    );
}

export default PostScreen;

const styles = StyleSheet.create({
    headingContainer: {
        fontSize: 20,
        borderBottomWidth: 5,
        borderColor: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PostScreen(props: any) {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{props.route.params.title}</Text>
            </View>
            <Text style={styles.excerpt}>{props.route.params.excerpt}</Text>
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
    excerpt: {
        fontSize: 18,
        padding: 5
    },
});
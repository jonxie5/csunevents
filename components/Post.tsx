import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function Post(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{props.title}</Text>
            </View>
            <Text style={styles.excerpt}>{props.excerpt}</Text>

             

             <View style={styles.buttonView}>
                <Pressable 
                    style={styles.button}
                    accessibilityLabel="Learn more about the event" > 
                    <Text style={styles.buttonText}>LEARN MORE</Text>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    accessibilityLabel="Join the event" > 
                    <Text style={styles.buttonText}>JOIN</Text>
                </Pressable>   
             </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
    },
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
    buttonView: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15
    },
    button: {
        borderWidth: 2,
        padding: 5
    },
    buttonText: {
        color: 'black'
    }
})

export default Post;
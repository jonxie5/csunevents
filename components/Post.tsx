// React and React Native
import React from 'react';
import { Text, View, Pressable } from 'react-native';

// Styling Imports
import { styles } from '../styles/components/PostStyles';

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
                    accessibilityLabel="Learn more about the event" 
                    onPress={() => {
                        props.navigation.navigate('SinglePostScreen', {
                            title: props.title, 
                            excerpt: props.excerpt
                        })
                    }}
                > 
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

export default Post;
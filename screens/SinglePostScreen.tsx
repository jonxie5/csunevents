import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, SafeAreaView, FlatList } from "react-native";
import HomeScreen from "./HomeScreen";


function PostScreen(props: any) {
    const [text, ChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [comments, setComments] = useState<string[]>([]);

    const handlePostComment = () => {
        if (text.trim() !== '') {
          setComments(prevComments => [...prevComments, text]);
          ChangeText(''); // Clear the TextInput
        }
      };

    return (
        <SafeAreaView>
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading} >{props.route.params.title}</Text>
            </View> 
            <Text style={styles.excerpt}>{props.route.params.excerpt}</Text>
            <View style={styles.comments}>
          <Text style={styles.comments}>Comments:</Text>
          <FlatList
            data={comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.commentItem}>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
            <TextInput
            onChangeText={ChangeText}
            value={text}
            style={styles.input}
            />
            <Pressable 
                style={styles.button}
                onPress={handlePostComment}
                accessibilityLabel="Post Comment" > 
                <Text style={styles.buttonText}>Post Comment</Text>
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
    comments: {
        fontSize: 15,
        borderBottomWidth: 3,
        borderColor: 'black'
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
    commentItem: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 5,
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
// React and React Native
import React, { useState } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView, FlatList } from "react-native";

// Styling imports
import { styles } from '../styles/SinglePostScreen'


function PostScreen(props: any) {
    const [text, ChangeText] = React.useState('');
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


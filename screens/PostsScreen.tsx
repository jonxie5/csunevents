import React from "react";
import { StyleSheet, Text, View, ScrollView, } from 'react-native';

// Custom Imports
import Post from "../components/Post";
import { StatusBar } from "expo-status-bar";

const posts = [
    {
        id: 2,
        title: "Tech Talk: The Future of AI",
        excerpt: "Join us in the Science Hall at 6PM for a fascinating discussion on AI advancements."
    },
    {
        id: 3,
        title: "International Student Mixer",
        excerpt: "Meet students from around the world! Friday at 8PM in the Student Union."
    },
    {
        id: 4,
        title: "Salsa Night Extravaganza",
        excerpt: "Ready to dance? Salsa Night this Saturday at the Campus Rec Center, 9PM."
    },
    {
        id: 5,
        title: "Game Dev Workshop",
        excerpt: "Interested in game development? Workshop this Wednesday at 5PM in Lab 203."
    },
    {
        id: 6,
        title: "Outdoor Movie Night: 'Inception'",
        excerpt: "Enjoy a movie under the stars! Thursday at 8PM on the East Lawn."
    },
    {
        id: 7,
        title: "Sustainability Club Meeting",
        excerpt: "Discuss green initiatives on campus. Monday at 4PM in Room 101, Enviro Hall."
    },
    {
        id: 8,
        title: "Campus Charity Run",
        excerpt: "Join the 5K run for a cause! Register at the Gym Lobby. Event on Sunday, 7AM."
    },
    {
        id: 9,
        title: "Jazz Band Live Concert",
        excerpt: "Enjoy live jazz music at the Auditorium, Friday 7:30PM."
    },
    {
        id: 10,
        title: "Art Exhibit: Student Creations",
        excerpt: "Explore art by our talented students. All week in the Art Center."
    },
    {
        id: 11,
        title: "Cool event at CSUN at 7PM!",
        excerpt: "Come quick!"
    },
];

function PostsScreen(props: any) {
    return (
        <View>
            <View style={styles.header}>
                    <Text style={styles.headerText}>CSUN Events</Text>
                </View>
                <ScrollView style={styles.viewContainer}>
                    {posts.map((post) => (
                        <Post 
                        navigation={props.navigation} 
                        {...post}
                        key={post.id}
                        />
                    ))}
                </ScrollView>
        </View>
    )
};

export default PostsScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D22030',
        justifyContent: 'space-around',
        padding: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 25
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    viewContainer: {
        padding: 10
    },
    statusBarStyles: {
        backgroundColor: 'red'
    }
  });
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, } from 'react-native';

// Supabase
import supabase from "../supabase/supabase";

// Custom Imports
import Post from "../components/Post";


function PostsScreen(props) {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetchData();
    }, [])

    const fetchData = async ()  =>  {
        const { data: posts, error } = await supabase
        .from('posts')
        .select('*')

        if (error) console.log('error', error)
        else setPosts(posts)
    }
    

    return (
        <View>
            <View style={styles.header}>
                    <Text style={styles.headerText}>CSUN Events</Text>
                </View>
                <ScrollView style={styles.viewContainer}>
                    {   posts.length > 0 ? posts.map((post) => (
                            <Post 
                            navigation={props.navigation} 
                            {...post}
                            key={post.id}
                            />)) : <Text>No events at this time</Text>
                    }
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
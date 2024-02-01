// React and React Native
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, } from 'react-native';
import { styles } from "../styles/PostsScreenStyles";

// Supabase
import supabase from "../supabase/supabase";

// Custom Components
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
                        />
                        )) : <Text>Loading events...</Text>
                    }
                </ScrollView>
        </View>
    )
};

export default PostsScreen;


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
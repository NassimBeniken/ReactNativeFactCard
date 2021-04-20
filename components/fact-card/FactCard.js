import React from 'react'
import {Image, Button, Text, View, StyleSheet, Dimensions} from 'react-native'
//import styles from './styles'

export default class FactCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.main}>
                <View style={styles.view}>
                    <Image 
                        source={{ uri: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_1280.jpg"}}
                        style={styles.image}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.text}>Description de l'image donc ceci est un paragraphe qui va décrire l'image et son contenu en fait tout simplement dans les règles de l'art</Text>
                    </View>
                    <Button title="Voir"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.7,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: "#FFF",
        justifyContent: "space-between"
    },
    image: {
        flex: 1
    },
    textView: {
        justifyContent: "center",
        flex: 0.3,
        paddingHorizontal: 5
    },
    text: {
        textAlign: "justify"
    }
})


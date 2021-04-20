import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
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
    textView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.3
    }
})

export default styles
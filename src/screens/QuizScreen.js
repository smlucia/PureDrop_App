import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, TextInput, StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuizScreen = () => {        
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.question}>Question1</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>

        </View>

    )

}

export default QuizScreen ;

const styles = StyleSheet.create({
    container: {
        paddingTop : 40,
        paddingHorizontal: 20,
        height: '100'
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row', 
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 28,
    },

});
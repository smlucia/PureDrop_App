import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const QuizHomeScreen = () => {
    return (
        <View>
            <View style={styles.container}>
            <Image 
                source={{
                    
                }}
                style={styles.banner}
                resizeMode="contain"
            />
            </View>

            <View>
            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
};

export default QuizHomeScreen;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

});
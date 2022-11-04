import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const QuizResultsScreen = () => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>

            <View> 
            {/* add img here */}
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    

        
    
    );
};

export default QuizResultsScreen; 
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

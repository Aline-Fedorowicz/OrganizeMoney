

import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function CustomTabBar( {state, descriptors, navigation}) {
 return (
   <View style={styles.container}>
    <View style={styles.content}>
        {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];

            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate({name: route.name, merge: true});
                }
            };


            const onLongPress= () => {
                navigation.emit ({
                    type: 'tabLongPress',
                    target: route.key
                });
            };

            return (
                <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel ={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.buttonTab}
                >
                    <View style={styles.containerButton}>
                        <View style={[styles.innerButton, { backgroundColor: isFocused ? "rgb(72 21 9)" : "transparent"}]}>
                            <MaterialIcons
                            name={options.tabBarIcon}
                            size={34}
                            color= {isFocused ? "rgb(205 70 39)" : "#DADADA"}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            )

        })}

    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    content:{
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 38 : 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        gap: 8,
        elevation: 10,
        backgroundColor: "rgb(98, 97, 90)",
        opacity: 0.9,
        borderRadius: 99

    

    },

    buttonTab:{
        justifyContent:'center',
        alignItems: 'center'

    },

    innerButton:{
        padding: 8,
         borderRadius:99,
    },

    containerButton:{
        alignItems: 'center',
         padding:4
    }

})
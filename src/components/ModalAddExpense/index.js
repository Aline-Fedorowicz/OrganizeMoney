import React, {useRef} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {MotiView} from 'moti'
import { Modalize } from 'react-native-modalize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormAddBalance from '../FormAddBalance';
import FormAddExpense from '../FormAddExpense';

export default function ModalBalance() {
    const modalizeRef = useRef(null)

    function onOpen(){
        modalizeRef.current?.open()
    }

    function onClose(){
        modalizeRef.current?.close()
    }
    return (
        <MotiView 
        style={styles.container}
        from={{
            rotateX: '-100ded',
            opacity: 0

        }}
        animate={{
            rotate: '0deg',
            opacity: 1
        }}
        transition={{
            type: "timing",
            delay: 300,
            duration: 900
        }}
        >

            <View style={styles.item}>
                <TouchableOpacity onPress={onOpen}>
                    <Text style={styles.itemTitle}> Adicionar Saída</Text>
                </TouchableOpacity>

                <Modalize 
                ref={modalizeRef}
                snapPoint={900}
               modalHeight={900}
                     
                >
                         <FormAddExpense/>

                    <View style={{
                        
                        
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgb(44 44 44)',
                        paddingBottom: 800,
                        
                        
                        
                        
                        
                    }}>

                        
 

                   
                        <TouchableOpacity onPress={onClose} style={[styles.button]}>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>



                    </View>

                </Modalize>
        
            </View>



        </MotiView>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#89ca41',
        justifyContent: 'center',
        zIndex:99,
        margin: 20,
    },

    itemTitle:{
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        padding: 14,
        fontWeight: 'bold'
        
     
        


    },

    content:{
        flexDirection: 'row',
        alignItems: 'center',
        
        
    },

    button: {
        backgroundColor: '#62615a',
        width: 300,
        borderRadius: 4,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 3
        
      },
    
      buttonText: {
        color: '#DADADA',
        fontSize: 18,
        fontWeight: 'bold'
    
      },

    buttonTitle:{
        fontSize: 20,
        color: '#DADADA',
        textAlign: 'center',
        padding: 14
     
        


    },



})
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, TextInput  } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


export default function EncryptionTable({ navigation }) {

    const backToMain = () => {
        navigation.navigate('Main');
    };

    const [modalVisible, setModalVisible] = useState(false);

    const [textCode, setTextCode] = useState('');

    const [codedTextEnd, setCodedTextEnd] = useState('');

    const [numR, setNumR] = useState(0);

    const [numC, setNumC] = useState(0);

    const [errModalVisible, setErrModalVisible] = useState(false);




    function matrixArray(rows,columns){
        let textUncode = textCode
        let arrTextUncode = textUncode.split('')
        if(rows == 0 || columns == 0 || rows * columns < textUncode.length) {
            setErrModalVisible(true)
        }
       
        let w = 0
        let arr = new Array();
        for(let i = 0; i < rows; i++) {
        arr[i] = new Array();
        for(let j = 0; j < columns; j++){
            if(w >= arrTextUncode.length){
                arr[i][j] = '*';
                w++;
            } else {
                arr[i][j] = arrTextUncode[w];
                w++;

            }
                
            
            
        }
        }
        let codedText = ''
        for(let j = 0; j < columns; j++) {
            for(let i = 0; i < rows; i++) {
                codedText = codedText.concat(arr[i][j])
            }
        }

        
        // return codedText;
        setCodedTextEnd(codedText)
    }      

    

    const ModalStyle = {
        backgroundColor : "#F8FFEF",   
        height: 400,  
        width: '80%',  
        borderRadius: 30,  
        blurRadius: 1,
    }

    const InputStyle = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 258,
        height: 50,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
    };

    const inputUnCodeStyle = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 340,
        height: 50,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
    }

    const InputParamsStyle = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
    }

    const ErrModalStyle ={
        backgroundColor : "#E7F3CF",   
        height: 300,  
        width: '100%',  
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40  
    }

    return (
        <SafeAreaView>
            <Modal visible={modalVisible} animationType='fade'   transparent={true} >
                <TouchableOpacity onPress={() => setModalVisible(false)} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <TouchableOpacity style={ModalStyle} onPress={() => console.log('do nothing')} activeOpacity={1} >
                        <View style={{
                            width: '90%', 
                            height: 50,
                            borderBottomWidth: 1,
                            borderColor: '#101010',
                            marginLeft: 16,
                            flexDirection: 'row',
                            
                    }}>
                        <MaterialCommunityIcons name="information-outline" size={28} color="black" style={{
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }} />
                            <Text style={{
                                fontFamily: 'mul-semibold', 
                                fontSize: 22, 
                                marginTop: 'auto', 
                                marginBottom: 'auto',
                                color: '#101010',
                                letterSpacing: 1,
                                marginLeft: 8
                                }}>About</Text>
                        </View>
                        <View style={{
                            width: '90%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                        <Text style={{
                            fontFamily: 'mul-light',
                            fontSize: 18,
                            marginTop: 10,
                            color: '#101010'
                        }}>
                            The Text Encoder application is designed for users who want to protect themselves by encrypting some text using two proposed types of cipher. The application has a field for inserting text that you want to encrypt,
                            after encryption, the text will appear in another field already encrypted, where it can be copied and used.
                            The design project and the entire working part was completed in accordance with the requirement.
                        </Text>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
            <View  style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={backToMain}>
                <Ionicons name="arrow-back" size={20} color="#2E2E2E" />
                <Text style={styles.buttonBackTitle}>Back</Text>    
                </TouchableOpacity>
                <Text style={styles.sectionName}>Encryption Table</Text>
                <TouchableOpacity style={styles.infoModalButton} onPress={() => setModalVisible(true)}>
                <Feather name="info" size={24} color='#2E2E2E' style={styles.infoIcon}/>
                </TouchableOpacity> 
            </View> 
            <Text style={{
                fontFamily: 'mul-light',
                fontSize: 16,
                marginLeft: 34,
                marginTop: 20
            }}>Original text:</Text>
            <View style={styles.inputContainerUnCode}>
                
                <TextInput
                    style={inputUnCodeStyle} 
                    autoCorrect={false} 
                    maxLength={25}
                    returnKeyType='default'
                    value={textCode}
                    onChangeText={setTextCode}
                    >
                </TextInput>
            </View>
            <Text style={{
               fontFamily: 'mul-light',
               fontSize: 16,
               marginLeft: 34,
               marginTop: 16
            }}>Ciphertext:</Text>
            <View style={styles.inputContainer}>
                <TextInput style={InputStyle} autoCorrect={false} 
                value={codedTextEnd} 
                ></TextInput>
                <TouchableOpacity style={styles.buttonCopy}>
                    <Feather name="copy" size={30} color="#2E2E2E" style={styles.copyIcon}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={{
                width: 200,
                height: 40,
                borderRadius: 30,
                marginTop: 30,
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: '#101010',
                alignItems: 'center',
            }}
            onPress={() => matrixArray(numC, numR)}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontFamily: 'mul-reg',
                    fontSize: 18,
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}>Encode Text</Text>
            </TouchableOpacity>
            <View style={{
                width: 340,
                height: 220,
                borderWidth: 2,
                borderColor: '#A7C470',
                borderRadius: 30,
                marginTop: 30,
                marginRight: 'auto',
                marginLeft: 'auto'
            }}>
                <View style={{
                    width: 300,
                    height: 40,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#2E2E2E',
                    marginLeft: 20,

                }}>
                    <Text style={{
                        fontFamily: 'mul-semibold',
                        fontSize: 18,
                        marginTop: 8,
                        color: '#2E2E2E'
                    }}>Parametrs</Text>
                    <Ionicons name="options" size={24} color="#2E2E2E" style={{
                        marginTop: 8,
                        marginLeft: 10
                    }} />
                </View>
                
                <View style={styles.inputParamsConteiner}>
                <Text style={{
                    marginTop: 14,
                    marginLeft: 10,
                    fontFamily: 'mul-light',
                    marginBottom: 6,
                    fontSize: 14
                }}>Rows:</Text>
                    <TextInput style={InputParamsStyle} autoCorrect={false} keyboardType='number-pad' returnKeyType='done'
                    value={numR} 
                    onChangeText={setNumR} 
                    ></TextInput>
                    <Text style={{
                    marginTop: 14,
                    marginLeft: 10,
                    fontFamily: 'mul-light',
                    marginBottom: 6,
                    fontSize: 14
                }}>Columns:</Text>
                    <TextInput style={InputParamsStyle} autoCorrect={false} keyboardType='number-pad' returnKeyType='done'
                    value={numC} 
                    onChangeText={setNumC} 
                    ></TextInput>
                    
                </View>

            </View>
            <Modal visible={errModalVisible} transparent={true} animationType='slide'>
            <TouchableOpacity onPress={() => setErrModalVisible(false)} style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <TouchableOpacity style={ErrModalStyle} onPress={() => console.log('do nothing')} activeOpacity={1} >
                    <View style={{
                        width: '86%', 
                        height: 50,
                        borderBottomWidth: 1,
                        borderColor: '#101010',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 6,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                }}>
                        <Text style={{
                            fontFamily: 'mul-semibold', 
                            fontSize: 22, 
                            marginTop: 'auto', 
                            marginBottom: 'auto',
                            color: '#dc143c',
                            letterSpacing: 1
                            }}>Error</Text>
                            <MaterialIcons name="error-outline" size={28} color="#dc143c" style={{
                                marginTop: 'auto',
                                marginBottom: 'auto'
                            }} />

                    </View>
                    <View style={{
                        width: '86%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                    <Text style={{
                        fontFamily: 'mul-light',
                        fontSize: 18, 
                        marginTop: 10
                    }}>
                        the number of columns or the number of lines in the encoder table should not be zero, and the number of entered characters in the encrypted text should not exceed the number of cells in the encoder table. Check the entered data for correctness and try again.
                        </Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
       </Modal>
        </SafeAreaView>
        

    );
}

const styles = StyleSheet.create({
    buttonParamsCopy: {
        width: 82,
        height: 40,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: -1,
        alignItems: 'center'
    },
    inputParamsConteiner: {
        width: 300,
        height: 50,
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginTop: 20,
    },
    inputContainerUnCode: {
        width: 340,
        height: 50,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
    },
    copyIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: -6
    },
    buttonCopy: {
        width: 82,
        height: 50,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: -1,
        alignItems: 'center'
    },
    inputContainer: {
        width: 340,
        height: 50,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
    },
    
    infoIcon: {
        marginLeft: 100,
    },
    sectionName: {
        fontFamily: 'mul-reg',
        fontSize: 18,
        marginLeft: 58,
        color: '#2E2E2E'

    },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
   },
   backButton: {
    width: 70,
    height: 40,
    color: 'black',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
   },
   buttonBackTitle: {
    fontFamily: 'mul-reg',
    fontSize: 18,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#2E2E2E'
   }
});
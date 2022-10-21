import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, TextInput  } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 








export default function QTSOPP({ navigation }) {

    const backToMain = () => {
        navigation.navigate('Main');
    };

    const [P, setP] = useState(0);

    const [V, setV] = useState(0);

    const [T, setT] = useState(0);

    const [result, setResult] = useState('');

    const [errModalVisible, setErrModalVisible] = useState(false);




    function Generate() {
        if(P == 0 || String(P) === '' || String(V) === '' || String(T) === '') {
            setErrModalVisible(true)
        } else {
            let S = Math.ceil((V * T) / P);
            setResult(String(S))
        }
        
    }


    const [modalVisible, setModalVisible] = useState(false);


    const ModalStyle = {
        backgroundColor : "#F8FFEF",   
        height: 400,  
        width: '80%',  
        borderRadius: 30,  
        blurRadius: 1,
    }

    const inputMiddle = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 113,
        height: 46,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        // borderTopLeftRadius: 30,
        // borderBottomLeftRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
    };
    const inputLeft = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 113,
        height: 46,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
        marginRight: -1
    };
    const inputRight = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 113,
        height: 46,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
        marginLeft: -1
    };
   
    const InputStyle = {
        color: '#101010',
        fontFamily: 'mul-semibold',
        width: 258,
        height: 46,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 16,
    };

    const ErrModalStyle ={
        // backgroundColor : "#FFFFFF", 
        borderWidth: 1,
        borderColor: '#dc143c',  
        height: 160,  
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
                <Text style={styles.sectionName}>QTSOPP</Text>
                <TouchableOpacity style={styles.infoModalButton} onPress={() => setModalVisible(true)}>
                <Feather name="info" size={24} color='#2E2E2E' style={styles.infoIcon}/>
                </TouchableOpacity> 
            </View> 
            <View style={{
                flexDirection: 'row',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: 40
            }}>
                <TextInput style={inputLeft} keyboardType='number-pad' returnKeyType='done' placeholder='P' onChangeText={setP} value={P} ></TextInput>
                <TextInput style={inputMiddle} keyboardType='number-pad' returnKeyType='done' placeholder='V' onChangeText={setV} value={V} ></TextInput>
                <TextInput style={inputRight} keyboardType='number-pad' returnKeyType='done' placeholder='T' onChangeText={setT} value={T} ></TextInput>
            </View>
            <View style={{
                flexDirection: 'row',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 30,
            }}> 
            <TextInput style={InputStyle} autoCorrect={false} value={result} ></TextInput>
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
            onPress={() => Generate()}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontFamily: 'mul-reg',
                    fontSize: 18,
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}>Generate</Text>
            </TouchableOpacity>
            <Modal visible={errModalVisible} transparent={true} animationType='slide'>
       <TouchableOpacity onPress={() => setErrModalVisible(false)} style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <TouchableOpacity style={ErrModalStyle} onPress={() => console.log('do nothing')} activeOpacity={1} >
                    <View style={{
                        width: '86%', 
                        height: 40,
                        // borderBottomWidth: 1,
                        // borderColor: '#101010',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 6,
                        flexDirection: 'row',
                        // justifyContent: 'space-between'
                }}>
                    <MaterialIcons name="error-outline" size={28} color="#dc143c" style={{
                                marginTop: 'auto',
                                marginBottom: 'auto'
                            }} />
                        <Text style={{
                            fontFamily: 'mul-semibold', 
                            fontSize: 22, 
                            marginTop: 'auto', 
                            marginBottom: 'auto',
                            color: '#dc143c',
                            letterSpacing: 1,
                            marginLeft: 20
                            }}>Error</Text>
                            

                    </View>
                    <View style={{
                        width: '90%',
                        height: 90,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderWidth: 1,
                        borderColor: '#101010',
                        borderRadius: 20
                    }}>
                    <Text style={{
                        fontFamily: 'mul-light',
                        fontSize: 18, 
                        margin: 10
                        // marginTop: 10
                    }}>
                        To calculate the formula, all fields must be filled in, P must not be zero.
                        </Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
       </Modal>
        </SafeAreaView>
        

    );
}

const styles = StyleSheet.create({
    copyIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: -6
    },
    buttonCopy: {
        width: 82,
        height: 46,
        borderWidth: 1,
        borderColor: '#2E2E2E',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: -1,
        alignItems: 'center'
    },
    
    infoIcon: {
        marginLeft: 130,
    },
    sectionName: {
        fontFamily: 'mul-reg',
        fontSize: 18,
        marginLeft: 92,
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
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Modal, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



export default function GeneratorPassword({ navigation }) {

    const [num, setNum] = useState(0)

    
    
    // Functions -------------------------------------
    function GeneratePassword() {
        if(num < 8 || num > 16) {
            setErrModalVisible(true)
        } else {
            let password = ''

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
    
            function makeLetter() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              
                for (var i = 0; i < 1; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
              
                return text;
            }
    
            function makeSymbol() {
                let text = "";
                let possible = "!”#$%&’()*";
    
              
                for (var i = 0; i < 1; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
              
                return text;
            }
    
            for(let i = 0; i < 2; i++) {
                let randomInt = getRandomInt(1,9)
                password = password.concat(randomInt)
            }
            password = password.concat(makeLetter())
    
            
    
            let countInput = num
            let countFull = countInput % 8
            for(let i = 0; i < countFull; i++) {
                let randomLetter = makeLetter()
                password = password.concat(randomLetter)
            }
            for(let i = 4 + countFull; i <= countInput; i++) {
                let randomSymbol = makeSymbol()
                password = password.concat(randomSymbol)
            }
            setGenPass(password)
        }

        
    };


    

    const backToMain = () => {
        navigation.navigate('Main');
    }

    // -----------------------------------------------

    // Styles ------------------------
    
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

    const ModalStyle = {
        backgroundColor : "#F8FFEF",   
        height: 400,  
        width: '80%',  
        borderRadius: 30,  
    }

    const ErrModalStyle ={
        backgroundColor : "#E7F3CF",   
        height: 160,  
        width: '100%',  
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40  
    }

    const inputParam = {
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
        marginLeft: 20,
    }

    // --------------------------

    // const's useState --------------------------------------

    const [modalVisible, setModalVisible] = useState(false);

    const [errModalVisible, setErrModalVisible] = useState(false);
   
    const [genPass, setGenPass] = useState('');

    // -------------------------------------------------------------

    return (
        
    <SafeAreaView>
        <Modal visible={modalVisible} animationType='fade'   transparent={true} >
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                <TouchableOpacity style={ModalStyle} onPress={() => console.log('do nothing')} activeOpacity={1} >
                    <View style={{
                        width: '90%', 
                        height: 50,
                        borderBottomWidth: 1,
                        borderColor: '#101010',
                        marginLeft: 16,
                }}>
                        <Text style={{
                            fontFamily: 'mul-semibold', 
                            fontSize: 22, 
                            marginTop: 'auto', 
                            marginBottom: 'auto',
                            color: '#101010',
                            letterSpacing: 1
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
                        The application "Password genarator" is designed for users who want to protect themselves by generating a random password according to given parameters. The application has a selector for choosing the number of characters in the password, the password itself is generated by a formula. The design project and the entire working part is made in accordance with the requirement.
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
            <Text style={styles.sectionName}>Password Generator</Text>
            <TouchableOpacity style={styles.infoModalButton} onPress={() => setModalVisible(true)}>
            <Feather name="info" size={24} color='#2E2E2E' style={styles.infoIcon}/>
            </TouchableOpacity>
            
        </View> 
       
        <View style={styles.inputContainer}>
            <TextInput style={InputStyle} value={genPass} autoCorrect={false} ></TextInput>
            <TouchableOpacity style={styles.buttonCopy}>
                <Feather name="copy" size={30} color="#2E2E2E" style={styles.copyIcon}/>
            </TouchableOpacity>
        </View>
        <View style={{
            // flexDirection: 'row',
            marginTop: 26,
            marginLeft: 'auto',
            marginRight: 'auto',
           
        }}>
            {/* <TextInput
            style={inputParam}  
            keyboardType='number-pad' 
            maxLength={2} 
            returnKeyType='done'
            value={num} 
            onChangeText={setNum}
            >

            </TextInput> */}
        <TouchableOpacity style={styles.generateButton} onPress={() => GeneratePassword()}>
            <Text style={styles.generateButtonTitle}>Generate Password</Text>
        </TouchableOpacity>
        </View>
        <View style={{
                width: 340,
                height: 160,
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
                <Text style={{
                    marginTop: 14,
                    marginLeft: 20,
                    fontFamily: 'mul-light',
                    marginBottom: 6,
                    fontSize: 14
                }}>Password length:</Text>
                <View style={styles.inputParamsConteiner}>
                <TextInput
                    style={inputParam}  
                    keyboardType='number-pad' 
                    maxLength={2} 
                    returnKeyType='done'
                    value={num} 
                    onChangeText={setNum}
                >

                </TextInput>
                    
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
                        The password must contain between 8 and 16 characters. Please correct the entered value.
                        </Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
       </Modal>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundModal: {
        
    },
    modalInfo:{
        width: 300,
        height: 400,
        backgroundColor: 'silver'
    },
    infoModalButton: {
        marginLeft: 70,
        width: 24,
        height: 24,
    },
    input: {
        color: '#636363',
        fontFamily: 'mul-reg',
        fontSize: 10,
    },
    generateButtonTitle: {
        fontFamily: 'mul-reg',
        color: 'white',
        fontSize: 16,
        marginBottom: 'auto',
        marginTop: 'auto'
    },
    generateButton: {
        width: 180,
        height: 50,
        backgroundColor: '#101010',
        // borderRadius: 30,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // marginTop: 26,
        alignItems: 'center',
        borderRadius: 30

    },
    copyIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: -6
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    buttonBackTitle: {
        fontFamily: 'mul-reg',
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#2E2E2E'
    },
    backButton:{
        width: 70,
        height: 40,
        // borderWidth: 1,
        // borderColor: 'black',
        color: 'black',
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

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
    input: {
        width: 258,
        height: 50,
        borderWidth: 1,
        borderColor: '#7C71FF',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    inputContainer: {
        width: 340,
        height: 50,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 52,
        // borderWidth: 1,
        // borderColor: '#7C71FF',
        // borderTopLeftRadius: 30,
        // borderBottomLeftRadius: 30,

    },
    sectionName: {
        fontFamily: 'mul-reg',
        fontSize: 18,
        marginLeft: 40,
        color: '#2E2E2E'

    },
   
});
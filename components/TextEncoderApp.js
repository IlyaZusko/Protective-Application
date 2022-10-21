import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 








export default function EncoderTextApp({ navigation }) {
    const backToMain = () => {
        navigation.navigate('Main');
    }

    const [modalVisible, setModalVisible] = useState(false);

    const [codedTextEnd, setCodedTextEnd] = useState('');

    const [numE, setNumE] = useState(0)


    function EncodeTextFunc() {
        let uncodedText = textCode
        let alphafit = ['а','А','б','Б','в','В','г','Г','д','Д','е','Е','ё','Ё','ж','Ж','з','З','и','И','й','Й','к','К','л','Л','м','М','н','Н','о','О','п','П','р','Р','с','С','т','Т','у','У','ф','Ф','х','Х','ц','Ц','ч','Ч','ш','Ш','щ','Щ','ь','Ь','ы','Ы','ъ','Ъ','э','Э','ю','Ю','я','Я']
        let arrayUncodedText = uncodedText.split('')
        let a = 0
        let num
        for(let i = 0; i < alphafit.length; i++) {
            if(arrayUncodedText[a] == ' ') {
                a++
            }
            if(arrayUncodedText[a] == alphafit[i]) {
                num = i + (numE * 2)
                if(num > alphafit.length){
                    num = num % alphafit.length;
                }
                    arrayUncodedText[a] = alphafit[num]
                    num  = i + (numE * 2);
                    a++;
                    i = -1;
                    continue 
            }
            
        
        }
        let codedText = arrayUncodedText.join('')
        setCodedTextEnd(codedText)
    }


    // Style -----------------------------------------------
    const ModalStyle = {
        backgroundColor : "#F8FFEF",   
        height: 400,  
        width: '80%',  
        borderRadius: 30,  
        blurRadius: 1
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

    //-----------------------------------------------

    const [textCode, setTextCode] = useState('');
  

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
                <Text style={styles.sectionName}>Caesar Method</Text>
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
                <TextInput style={InputStyle} autoCorrect={false} value={codedTextEnd} ></TextInput>
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
            onPress={() => EncodeTextFunc()}
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
                }}>Bias:</Text>
                <View style={styles.inputParamsConteiner}>
                    <TextInput style={InputParamsStyle} autoCorrect={false} keyboardType='number-pad' returnKeyType='done' value={numE} 
                onChangeText={setNumE} ></TextInput>
                    
                </View>

            </View>
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
        flexDirection: 'row',
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
        marginLeft: 90,
    },
    sectionName: {
        fontFamily: 'mul-reg',
        fontSize: 18,
        marginLeft: 74,
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
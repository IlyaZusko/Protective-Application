import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 









export default function Main({ navigation }) {

    const loadSceneGeneratePassword = () => {
        navigation.navigate('Generate Password');
    }

    const loadSceneTextEncoder = () => {
        navigation.navigate('Text Encoder App');
    } 

    const loadSceneQTSOPP = () => {
        navigation.navigate('QTSOPP');
    }

    const loadSceneTrisemusEncoder = () => {
        navigation.navigate('Trisemus')
    }

    const loadSceneEncryptionTable = () => {
        navigation.navigate('Encryption Table')
    }

    return (
        
        
      <View style={styles.mainContainer}>
          <View style={styles.header}>
          <MaterialCommunityIcons name="shield-account" size={36} color="black" style={{
              marginTop: 46,
              marginLeft: 22,
          }} />
          <Text style={{
              fontFamily: 'mul-semibold',
              marginTop: 52,
              marginLeft: 8,
              fontSize: 18
          }}>Security App</Text>
            <Octicons name="moon" size={26} color="black" style={{
                marginTop: 50,
                marginLeft: 190
            }} />
        </View>
        

        {/* Search */}

        <View style={styles.search}>
            <Text style={styles.searchTitle}>Search...</Text>
        </View>

        {/* Apps */}

        <View style={styles.appContainer}>
            <View style={{
                borderColor: '#C5C5C5',
                width: '100%',
                height: 40,
                borderBottomWidth: 1,

            }}>
                <Text style={styles.apps}>App's</Text>
            </View>
            
            <View style={styles.chapter}>
                <Text style={{
                    fontFamily: 'mul-reg',
                    fontSize: 16,
                    marginLeft: -200,
                    marginTop: 6
                }}>Password`s</Text>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneQTSOPP}>
                    <Text style={styles.passwordGenTitle}>QTSOPP</Text>
                    <MaterialCommunityIcons name="math-compass" size={28} color="#FFFFFF" style={styles.passwordIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneGeneratePassword}>
                    <Text style={styles.passwordGenTitle}>Password Generator</Text>
                    <MaterialCommunityIcons name="form-textbox-password" size={28} color="#FFFFFF" style={styles.passwordIcon}/>

                </TouchableOpacity>
            </View>

            <View style={styles.chapter}>
                <Text style={{
                    fontFamily: 'mul-reg',
                    fontSize: 16,
                    marginLeft: -230,
                    marginTop: 6
                }}>Table`s</Text>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneEncryptionTable}>
                    <Text style={styles.passwordGenTitle}>Encryption Tables</Text>
                <MaterialCommunityIcons name="table-lock" size={28} color="#FFFFFF" style={styles.passwordIcon} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneGeneratePassword}>
                    <Text style={styles.passwordGenTitle}>Magic Square</Text>
                    <FontAwesome name="magic" size={28} color="#FFFFFF" style={styles.passwordIcon} />

                </TouchableOpacity>
            </View>
            
            <View style={styles.chapterSecond}>
                <Text style={{
                    fontFamily: 'mul-reg',
                    fontSize: 16,
                    marginLeft: -182,
                    marginTop: 6
                }}>Text Encoder`s</Text>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneTextEncoder}>
                    <Text style={styles.passwordGenTitle}>Caesar Method</Text>
                    <MaterialCommunityIcons name="crown-outline" size={28} color="#FFFFFF" style={styles.passwordIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneTrisemusEncoder}>
                    <Text style={styles.passwordGenTitle}>Trisemus Method</Text>
                    <AntDesign name="book" size={28} color="#FFFFFF" style={styles.passwordIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.passwordGen} onPress={loadSceneTextEncoder}>
                    <Text style={styles.passwordGenTitle}>Playfair method</Text>
                    <MaterialCommunityIcons name="atom" size={28} color="#FFFFFF" style={styles.passwordIcon} />
                </TouchableOpacity>
            </View>
        </View>
      </View>
      
    );
}

const styles = StyleSheet.create({
    chapterSecond: {
        borderWidth: 1,
        borderColor: '#101010',
        height: 250,
        width: 340,
        borderRadius: 20, 
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#F8FFEF',
        // shadowColor: '#000',
        // shadowOffset: { width: -1, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
    },
    chapter: {
        borderWidth: 1,
        borderColor: '#101010',
        height: 180,
        width: 340,
        borderRadius: 20, 
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#F8FFEF',
        // shadowColor: '#000',
        // shadowOffset: { width: -1, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        
    },
    passwordIcon: {
        marginRight: 20
    },
    buttonCopy: {
        width: 82,
        height: 56,
        borderWidth: 1,
        borderColor: '#7C71FF',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: -1
    },
    input: {
        width: 258,
        height: 56,
        borderWidth: 1,
        borderColor: '#7C71FF',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    inputContainer: {
        width: 340,
        height: 56,
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
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    passwordGenTitle: {
        color: '#FFFFFF',
        fontFamily: 'mul-semibold',
        fontSize: 16,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 14,
    },
    passwordGen: {
        width: 300,
        height: 50,
        backgroundColor: '#101010',
        borderRadius: 30,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    appContainer: {
        width: 340,
        height: '100%',
        marginTop: 20,
    },
    apps: {
        color: '#2E2E2E',
        fontFamily: 'mul-reg',
        fontSize: 20,
        
    },
    searchTitle: {
        color: '#636363',
        fontFamily: 'mul-reg',
        fontSize: 16,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 24,
    },
  search: {
    width: 340,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    marginTop: 46,
    

  },
  line1: {
    width: 1,
    height: 22,
    backgroundColor: '#636363',
    marginLeft: 10,
    marginRight: 10,
  },
  accName: {
    fontFamily: 'mul-reg',
    fontSize: 18,
    
  },
  header: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 100,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  mainContainer: {
    alignItems: 'center'
  },
});

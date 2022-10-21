import React from 'react';
import Main from './components/Main';
import GeneratorPassword from './components/GeneratorPassword';
import EncodeTextApp from './components/TextEncoderApp';
import QTSOPP from './components/QTSOPP';
import TrisemusEncoder from './components/TrisemusEncoder';
import EncryptionTable from './components/EncryptionTables';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Main"
                component={Main}
                options={{title: 'Defence app', 
                headerShown: false,
                cardStyle: {backgroundColor: '#F8FFEF'}
                }}
               
                
            />
            <Stack.Screen 
                name="Generate Password"
                component={GeneratorPassword}
                options={{
                    title: 'Generate Password', 
                    headerShown: false,
                    cardStyle: {backgroundColor: '#F8FFEF'}

                }}
            />
            <Stack.Screen
                name="Text Encoder App"
                component={EncodeTextApp}
                options={{
                    title: 'Text Encoder',
                    headerShown: false,
                    cardStyle: {backgroundColor: '#F8FFEF'}
                }}
            />
            <Stack.Screen 
                name="QTSOPP"
                component={QTSOPP}
                options={{
                    title: 'QTSOPP',
                    headerShown: false,
                    cardStyle: {backgroundColor: '#F8FFEF'}
                }}
            />
            <Stack.Screen 
                name="Trisemus"
                component={TrisemusEncoder}
                options={{
                    title: 'Trisemus Encoder',
                    headerShown: false,
                    cardStyle: {backgroundColor: '#F8FFEF'}
                }}
            />
            <Stack.Screen 
                name="Encryption Table"
                component={EncryptionTable}
                options={{
                    title: 'Encryption Table',
                    headerShown: false,
                    cardStyle: {backgroundColor: '#F8FFEF'}
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

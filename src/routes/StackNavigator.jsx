import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login';
import Sign from '../pages/Sign';
import Home from '../pages/Home';
import General from '../pages/General';
import General from '../pages/Profile';
import EquipmentList from '../pages/EquipmentList';
import EquipmentDetails from '../pages/EquipmentDetails';
import EquipmentRegistration from '../pages/EquipmentRegistration';
import RecipeList from '../pages/RecipeList';
import RecipeDetails from '../pages/RecipeDetails';
import RecipeRegistration from '../pages/RecipeRegistration';
import ProductAssistant from '../pages/ProductAssistant';
import WaterCorrection from '../pages/WaterCorrection';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                <Stack.Screen name="Sign" component={Sign} options={{ title: 'Cadastro' }} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
                <Stack.Screen name="General" component={General} options={{ title: 'Geral' }} />
                <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
                <Stack.Screen name="EquipmentList" component={EquipmentList} options={{ title: 'Equipamentos' }} />
                <Stack.Screen name="EquipmentDetails" component={EquipmentDetails} options={{ title: 'Detalhes do Equipamento' }} />
                <Stack.Screen name="EquipmentRegistration" component={EquipmentRegistration} options={{ title: 'Cadastrar Equipamento' }} />
                <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Receitas' }} />
                <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Detalhes da Receita' }} />
                <Stack.Screen name="RecipeRegistration" component={RecipeRegistration} options={{ title: 'Cadastrar Receita' }} />
                <Stack.Screen name="ProductAssistant" component={ProductAssistant} options={{ title: 'Assistente de Produtos' }} />
                <Stack.Screen name="WaterCorrection" component={WaterCorrection} options={{ title: 'Correção de Água' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;
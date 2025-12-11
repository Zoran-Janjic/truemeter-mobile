import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, Platform } from 'react-native';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import { Theme } from './components/ui/Theme';

const Tab = createBottomTabNavigator();

function AboutScreenWrapper({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <AboutScreen onNavigateHome={() => navigation.navigate('Početna')} />
    </SafeAreaView>
  );
}

function HomeScreenWrapper() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={Theme.colors.background} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Theme.colors.primary,
            tabBarInactiveTintColor: Theme.colors.textSecondary,
            tabBarStyle: {
              backgroundColor: Theme.colors.surface,
              borderTopColor: Theme.colors.border,
              borderTopWidth: 0,
              paddingBottom: 50,
              paddingTop: 10,
              height: 110,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 20,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
              marginBottom: 5,
            },
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Početna"
            component={HomeScreenWrapper}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: 24, color }}>🏠</Text>
              ),
            }}
          />
          <Tab.Screen
            name="O aplikaciji"
            component={AboutScreenWrapper}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: 24, color }}>ℹ️</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});

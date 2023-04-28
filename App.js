import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigator from './src/navigator'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/store';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider style={styles.container}>
          <NavigationContainer theme={navTheme}>
            <Navigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
});

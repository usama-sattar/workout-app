import { StatusBar } from 'expo-status-bar';
import { Text, View, StatusBar as bar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import UserProvider from './src/context/user';
import AppContainer from './src/routes';


export default function App() {
  return (
    <SafeAreaProvider style={{ marginTop: bar.currentHeight}}>
      <StatusBar style='auto' backgroundColor={"#FFF"}/>
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </SafeAreaProvider>
  );
}



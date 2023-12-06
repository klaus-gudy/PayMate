import "react-native-gesture-handler";
import { StyleSheet, Text, View , Platform} from 'react-native';
import Navigation from "./navigations/Navigation";

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeights : 0,
  },
});

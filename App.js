import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={{ uri: 'https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg'}}
      style={styles.image}
      />
      <Text style={styles.text}>Para assistir os melhores filmes crie uma conta agora mesmo.</Text>
      <Text style={styles.text2}>Please fill up email and password to login your account.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  text: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'red',
  },
  text2: {
    color: 'aqua',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  }
});

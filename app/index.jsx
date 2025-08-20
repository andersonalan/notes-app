import PostItImage from '@/assets/images/post-it.png';
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={ styles.container }>
      <Image source={PostItImage} style={styles.image}/>
      <Text style={styles.title}>Bem vindo ao Notes App</Text>
      <Text style={styles.subtitle}>Salve suas anotações aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;

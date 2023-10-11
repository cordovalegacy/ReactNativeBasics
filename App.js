import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' />
        <Button style={styles.addGoalButton} title='Goal!!' />
      </View>
      <View>
          <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  addGoalButton: {
    padding: 3,
    width: 100
  }
});

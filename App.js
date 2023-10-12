import { Button, ScrollView, StyleSheet, Text, FlatList, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

  const [goal, setGoal] = useState("")
  const [goals, setGoals] = useState([])

  const changeHandler = (e) => {
    console.log(e)
    setGoal(e)
  }

  const submitHandler = () => {
    setGoals(prevGoals => [...prevGoals, {text: goal, key: Math.random().toString()}])
  }

  console.log(goals)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer1}>
        <TextInput
          placeholder='Your course goal!'
          style={styles.input}
          onChangeText={changeHandler} />
        <View style={styles.viewButton}>
          <Button title='Goal!!' onPress={submitHandler} />
        </View>
      </View>
      <View style={styles.inputContainer2}>
        <Text>List of goals...</Text>
        <ScrollView style={styles.listContainer}>
          {
            goals.map((eachGoal, idx) => (
              <Text key={eachGoal.text + idx} style={styles.goalText}>{eachGoal.text}</Text>
            ))
          }
        </ScrollView>
        <FlatList
          data={goals}
          renderItem={eachGoal => (<Text style={styles.goalText}>{eachGoal.item.text}</Text>)}
        />
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
  inputContainer1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "#cccccc",
    height: "25%"
  },
  inputContainer2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 5,
    width: "100%",
    paddingTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    paddingLeft: 10,
    padding: 10,
  },
  listContainer: {
    borderRadius: 5,
    width: "90%"
  },
  goalText: {
    fontSize: 20,
    color: "white",
    marginVertical: 5,
    padding: 5,
    backgroundColor: "purple"
  },
  viewButton: {
    width: "20%",
    backgroundColor: "lightblue"
  }
});

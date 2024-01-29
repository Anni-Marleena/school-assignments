import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [heartratelimit, setHeartratelimit] = useState(0);

  function calculate() {
    const upper =  (220 - age) * 0.85;
    const lower =  (220 - age) * 0.65;
    setHeartratelimit(lower+ "-" +upper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Limit</Text>
      <Text style={styles.field}>{heartratelimit}</Text>
      <Button onPress={calculate} title='Calculate'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});

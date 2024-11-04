import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';


export default function App() {

  const [todoList, setTodoList] = useState(["Bonjour", "Aurevoir"]);
  const [todo, setTodo] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ borderWidth: '1px' }}>
        <Input
          placeholder='Enter something'
          onChangeText={setTodo}
          value={todo}
        />
        </View>
        <Button
          onPress={() => todo != "" ? setTodoList([...todoList, todo]) : null}
          buttonStyle={{
            borderColor: 'rgba(78, 116, 289, 1)',
          }}
          type="outline"
          raised
          titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        >
          Add
        </Button>
      
          <View style={{ justifyContent: 'space-between'}}>
      {todoList.map((t, index) => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '10px'}}>
            <Text style={{ marginRight: '10px' }}>
              {t}
            </Text>
            <Button
              title="X"
              c="red"
              type="outline"
              onPress={() => setTodoList(todoList.filter((_, i) => i !== index))}
            />
          </View>)
      })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '40px',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

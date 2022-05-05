import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';
export default function App() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const goalInputHandler = (enteredText) => {
    setText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((previosGoals) => [
      { text: text, key: Math.random().toString() },
      ...previosGoals,
    ]);
    setIsOpen(false);
  };
  const deleteCourseItem = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.key !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setIsOpen(!isOpen)}
      />

      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onPress={() => deleteCourseItem(itemData.item.key)}
                isOpen={isOpen}
              />
            );
          }}
          keyExtractor={(item) => item.key}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});

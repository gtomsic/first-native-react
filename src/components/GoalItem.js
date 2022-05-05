import { StyleSheet, View, Text, Pressable } from 'react-native';
const GoalItem = ({ text, onPress }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});

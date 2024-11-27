import { StyleSheet, Text, View } from 'react-native';

const AnswerOption = () => {
  return (
    <View style={styles.container}>
      <Text>This is an option</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    borderRadius: 100,
  },
});

export default AnswerOption;

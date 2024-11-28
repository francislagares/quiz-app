import { Pressable, StyleSheet, Text } from 'react-native';

type AnswerOptionProps = {
  option: string;
  isSelected?: boolean;
  onPress: (option: string) => void;
};

const AnswerOption = ({ option, isSelected }: AnswerOptionProps) => {
  return (
    <Pressable
      onPress={() => console.warn('Option pressed: ', option)}
      style={[
        styles.container,
        isSelected && { backgroundColor: '#E1F396', borderColor: '#E1F396' },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
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

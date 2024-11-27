import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const QuestionCard = () => {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>What is React Native ?</Text>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingVertical: 40,
    gap: 20,

    // Shaddow iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android
    elevation: 5,
  },

  question: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
  },
});

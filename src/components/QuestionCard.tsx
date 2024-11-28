import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Question } from '@/types';

import AnswerOption from './AnswerOption';

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  const selectedOption = question.options[0];

  const handleOptionSelected = (option: string) => {
    console.log('Selected:', option);
  };

  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>

      <View style={{ gap: 10 }}>
        {question.options.map(option => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={selectedOption === option}
            onPress={() => handleOptionSelected(option)}
          />
        ))}
      </View>
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

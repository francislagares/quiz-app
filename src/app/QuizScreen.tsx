import React from 'react';

import { View } from 'react-native';

import QuestionCard from '@/components/QuestionCard';

const QuizScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#FDFEF4',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <QuestionCard />
    </View>
  );
};

export default QuizScreen;

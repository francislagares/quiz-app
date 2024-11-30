import { PropsWithChildren } from 'react';

import { StyleSheet, Text, View } from 'react-native';

type CardProps = PropsWithChildren<{
  title: string;
}>;

const Card = ({ title, children }: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingVertical: 40,
    gap: 20,

    // Shaddow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
  },
});

export default Card;

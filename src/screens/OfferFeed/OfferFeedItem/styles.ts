import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  topBlock: {
    flexDirection: 'row',
    columnGap: 16,
  },
  titleBlock: {
    flex: 1,
  },
  cashbackBlock: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
  },
  cashback: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  dateTitle: {
    marginTop: 16,
  },
});

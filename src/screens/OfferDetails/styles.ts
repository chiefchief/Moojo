import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
  portraitImage: {
    marginTop: 24,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  rowBlow: {
    flexDirection: 'row',
    columnGap: 16,
  },
  columnBlock: {
    flexDirection: 'column',
  },
  block: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  available: {
    fontSize: 16,
  },
  cashback: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

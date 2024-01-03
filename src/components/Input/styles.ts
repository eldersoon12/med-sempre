import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderColor: '#80A1CF',
    borderWidth: 0.5,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    height: 50,
    gap: 8,
  },
  input: {
    fontSize: 16,
    fontFamily: 'Inter',
    lineHeight: 24,
    width: '90%',
    height: 40,
  },
  icon: {},
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },
});

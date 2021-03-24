import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top_background: {
    backgroundColor: '#002581',
    height: '40%',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  form: {
    width: '70%',
    marginBottom: 10,

  },
  btn_login: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#002581',
    borderRadius: 36,
    margin: 10,

  }
});

export default styles;

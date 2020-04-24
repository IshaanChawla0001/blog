import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    display: 'flex'
  },
  logo: {
    position: 'relative',
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    marginLeft: [{ unit: '%H', value: 0.01 }],
    marginRight: [{ unit: '%H', value: 0.01 }],
    marginTop: [{ unit: '%V', value: 0.01 }],
    marginBottom: [{ unit: '%V', value: 0.01 }]
  },
  'logo img': {
    height: [{ unit: '%V', value: 0.3 }],
    width: [{ unit: '%H', value: 1 }]
  },
  h1: {
    position: 'absolute',
    textAlign: 'center',
    width: [{ unit: '%H', value: 1 }],
    color: 'white'
  },
  'nav a': {
    marginLeft: [{ unit: 'px', value: 20 }],
    marginBottom: [{ unit: 'px', value: 1 }],
    display: 'inline-block',
    letterSpacing: [{ unit: 'px', value: 1.2 }],
    fontWeight: 'bold',
    fontSize: [{ unit: 'px', value: 24 }],
    textDecoration: 'none',
    paddingTop: [{ unit: 'px', value: 20 }]
  }
});

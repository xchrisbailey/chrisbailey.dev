const colors = {
  pink: '#F786AA',
  blue: '#00F0B5',
  orange: '#F96E46',
  yellow: '#FFC15E',
  red: '#DB2B39',
}

export const lightTheme = {
  color: {
    text: 'rgba(0,0,0,0.87)',
    primary: '#BD93D8',
    secondary: '#B47AEA',
    ...colors,
  },
  body: {
    primary: '#fafafa',
    secondary: '#fff',
  },
}
export const darkTheme = {
  color: {
    text: '#fff',
    primary: '#B47AEA',
    secondary: '#BD93D8',
    ...colors,
  },
  body: {
    primary: '#121212',
    secondary: '#000',
  },
}

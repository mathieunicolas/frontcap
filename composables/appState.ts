export const useAppState = () => {
  return useState('appState', () => {
    return {
    'aside': false,
    'profile': 'prof',
    'newActiPanel': false,
    'actiCrea': false,
    'dispActi': false,
    'actiChoice' : false,
    'actiEleves': false,
    'bibli': true
  }
  })
}

export const useCurNote = () => {
  return useState("curNote", () => "0")
}

export const useGlobalNote = () => {
  return useState("globalNote", () => "0")
}
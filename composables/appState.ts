export const useAppState = () => {
  return useState('appState', () => {
    return {
    'newActiPanel': false,
    'actiCrea': false,
    'dispActi': false,
    'actiChoice' : false
  }
  })
}

export const useCurNote = () => {
  return useState("curNote", () => "0")
}

export const useGlobalNote = () => {
  return useState("globalNote", () => "0")
}
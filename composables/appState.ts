export const useAppState = () => {
  return useState('appState', () => {
    return {
    'newActiPanel': false,
    'creaActiPanel': false
  }
  })
}

export const useCurNote = () => {
  return useState("curNote", () => "0")
}

export const useGlobalNote = () => {
  return useState("globalNote", () => "0")
}
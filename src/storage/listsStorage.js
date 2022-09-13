const key = "lists";
const listsStorage = {
  get: () => {
    // Pega item do localstorage
    const value = localStorage.getItem(key);
    // Retorna item convertido em obj
    return JSON.parse(value);
  },
  set: (value) => {
    // Converte valor em string
    const newValue = JSON.stringify(value);
    // Salvar valor no localstorage
    localStorage.setItem(key, newValue);
  },
  // Apaga chave do localstorage
  remove: () => localStorage.removeItem(key),
};
export default listsStorage;

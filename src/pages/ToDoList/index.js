import React, { useState } from "react";

function ToDoList() {
  const [lists, setLists] = useState([]);
  // Função para adicionar lista vazia na variável lists
  const handleAddList = () => {
    // Sobrescreve o valor da variável lists
    setLists([...lists, []]);
  };
  // Função para remover ultimo elemento da variável lists
  const handleRemoveList = () => {
    // Clona valor de lists em uma nova variável
    var auxList = [...lists];
    // Elimina ultimo elemento da lista
    auxList.pop();
    // Altera valor da lists com o do novo array
    setLists(auxList);
  };
  return (
    <div>
      <h1>To do list</h1>
      <div>
        {lists.length > 0 ? (
          <>
            Selecione uma lista
            <select>
              {lists.map((list, idx) => (
                <option key={idx}>{idx + 1}</option>
              ))}
            </select>
          </>
        ) : null}
        <br />
        <br />
        <button onClick={handleAddList}>Adicionar lista</button>
        {lists.length > 0 && <button onClick={handleRemoveList}>Remover última lista</button>}
      </div>
      {lists.length > 0 ? (
        <div>
          <h2>Lista 1</h2>
          <ul>
            <li>
              <span>Banana </span>
              <button>Editar</button>
              <button>Deletar</button>
            </li>
            <li>
              <span>Pêra </span>
              <button>Editar</button>
              <button>Deletar</button>
            </li>
            <li>
              <span>Uva </span>
              <button>Editar</button>
              <button>Deletar</button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default ToDoList;

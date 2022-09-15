import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import listsStorage from "../../storage/listsStorage";

function ToDoList() {
  // const lista = [
  //   ["Banana", "Pêra", "Uva"],
  //   ["Biscoito", "Leite", "Ovo"],
  //   ["Blusa", "Calça"]
  // ]
  // lista[0][2]
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(0);
  const navigate = useNavigate();
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
  // Vai rodar no momento que o component for renderizado
  // É responsável por pegar a listagem que está no cache e por na variável de lista
  useEffect(() => {
    // Pegamos a listagem do localStorage
    const listsJSON = listsStorage.get();
    // Atribuímos a lista a variável lists
    setLists(listsJSON);
  }, []);
  // Vai ser chamado na primeira renderização do componente e sempre que a variável lists atualizar
  // Ele atualiza o lists no cache do navegador
  useEffect(() => {
    listsStorage.set(lists);
  }, [lists]);
  const handleRemoveItem = (idx) => {
    // Clonando a variável das listas
    var auxLists = [...lists];
    // Removo posição do idx da sub-lista
    auxLists[selectedList].splice(idx, 1);
    // Reescrevo a variável lists
    setLists(auxLists);
  };
  return (
    <div>
      <h1>To do list</h1>
      <div>
        {lists.length > 0 ? (
          <>
            Selecione uma lista
            <select
              onChange={(e) => {
                setSelectedList(parseInt(e.target.value));
              }}
            >
              {lists.map((list, idx) => (
                <option key={idx} value={idx}>
                  {idx + 1}
                </option>
              ))}
            </select>
          </>
        ) : null}
        <br />
        <br />
        <button onClick={handleAddList}>Adicionar lista</button>
        {lists.length > 0 && (
          <button onClick={handleRemoveList}>Remover última lista</button>
        )}
      </div>
      {lists.length > 0 ? (
        <div>
          <h2>Lista {selectedList + 1}</h2>
          <Link to={`/to-do-list/add-item/${selectedList + 1}`}>
            Adicionar item
          </Link>
          {!(lists[selectedList].length > 0) ? <h3>Não possui itens</h3> : null}
          <ul>
            {lists[selectedList].map((item, idx) => (
              <li key={idx}>
                <span>{item} </span>
                <button
                  onClick={() =>
                    navigate(`/to-do-list/edit-item/${selectedList + 1}/${idx}`)
                  }
                >
                  Editar
                </button>
                <button onClick={() => handleRemoveItem(idx)}>Deletar</button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default ToDoList;

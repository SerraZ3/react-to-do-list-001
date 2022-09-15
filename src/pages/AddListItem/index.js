import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import listsStorage from "../../storage/listsStorage";
function AddListItem() {
  const [value, setValue] = useState("");
  const { idList } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pega listas do localStorage
    const lists = listsStorage.get();
    // Insere valor no final do subarray 
    lists[parseInt(idList) - 1].push(value);
    // Atualiza listas no localStorage
    listsStorage.set(lists);
    // Redireciona usuário para a tela anterior
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </button>

      <br />
      <h1>Adicionando item na lista {idList}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Item"
        />
        <button type="submit">Adicionar item</button>
      </form>
    </div>
  );
}
export default AddListItem;

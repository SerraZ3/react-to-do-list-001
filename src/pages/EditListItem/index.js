import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import listsStorage from "../../storage/listsStorage";
function EditListItem() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { idList, idItem } = useParams();
  useEffect(() => {
    // Pega a lista do localStorage
    const lists = listsStorage.get();
    // Atualiza o valor do value com o conteúdo respectivo do array
    setValue(lists[parseInt(idList) - 1][idItem]);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pega a lista do localStorage
    const lists = listsStorage.get();
    // Atualiza valor na posição do item
    lists[parseInt(idList) - 1][idItem] = value;
    // Atualiza localStorage
    listsStorage.set(lists);
    // Volta para tela anterior
    navigate(-1);
  };
  return (
    <div>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <br />
      <h1>Editando item na lista {idList}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Item"
        />
        <button type="submit">Editar item</button>
      </form>
    </div>
  );
}

export default EditListItem;

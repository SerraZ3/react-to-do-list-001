import React from "react";
// Componentes do react route dom para gerenciar rotas
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import AddListItem from "../pages/AddListItem";
import EditListItem from "../pages/EditListItem";
import Home from "../pages/Home";
import ToDoList from "../pages/ToDoList";

// Função que irá retornar o roteamento
function Routes() {
  return (
    // Componente de configuração de rotas no navegador
    <BrowserRouter>
      {/* Componente de configuração de lista de rotas */}
      <RoutesDom>
        {/* Componente para configurar a rota */}
        {/* Path = Caminho no url que irá chamar essa rota */}
        {/* Element = Componente que será renderizado */}
        {/* O atributo index representa o path = "/" */}
        {/* <Route path="/" element={<h1>Raiz</h1>} /> */}
        <Route index element={<h1>Raiz</h1>} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<h1>Sobre</h1>} />
        <Route path="to-do-list">
          <Route index element={<ToDoList />} />
          <Route path="add-item/:idList" element={<AddListItem />} />
          <Route path="edit-item/:idList/:idItem" element={<EditListItem />} />
        </Route>

        <Route path="users">
          {/* www.meusite.com.br/users/edit/1
        www.meusite.com.br/users/add
        www.meusite.com.br/users */}
          <Route index element={<h1>users</h1>} />
          <Route path="edit" element={<h1>users edit</h1>} />
          <Route path="add" element={<h1>users add</h1>} />
          <Route path="edit/:id" element={<h1>users edit com id</h1>} />
        </Route>
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;

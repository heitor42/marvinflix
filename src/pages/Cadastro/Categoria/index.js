import React from 'react';
import { Link } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault';


function CadastrarCategoria() {
    return (
      <PageDefault>
        <h1>Cadastrar nova categoria</h1>

        <Link to="/">Go home!!!</Link>
      </PageDefault>
    );
  }

  export default CadastrarCategoria;
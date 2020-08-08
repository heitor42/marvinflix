import React from 'react';
import { Link } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault';


function CadastrarVideo() {
    return (
      <PageDefault>
        <h1>Cadastrar novo video</h1>

        <Link to="/cadastro/categoria">Cadastrar nova categoria</Link>
      </PageDefault>
    );
  }

  export default CadastrarVideo;
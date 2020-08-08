import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carrossel from '../../components/Carrossel';

function Home() {
    return (
      <PageDefault>
        <BannerMain 
          vidoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é o front End?"}
        />

        {dadosIniciais.categorias.map((categoria) => {
          if (categoria.titulo === "Front End"){
            return(
              <Carrossel 
                ignoreFirstVideo
                key={categoria.titulo}
                category={categoria} 
              />
            )
          }

          return(
            <Carrossel 
              key={categoria.titulo}
              category={categoria} 
            />
          )
        })}
      </PageDefault>
    );
  }

  export default Home;